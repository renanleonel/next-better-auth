import { z } from 'zod'

export type ActionState = {
  error?: string
  success?: string
  [key: string]: any
}

type ParsedActionFunction<T extends z.ZodType<any, any>, K> = (
  data: z.infer<T>,
  formData: FormData
) => Promise<K>

export function parsedAction<T extends z.ZodType<any, any>, K>(
  schema: T,
  action: ParsedActionFunction<T, K>
) {
  return async (_: ActionState, formData: FormData): Promise<K> => {
    const result = schema.safeParse(Object.fromEntries(formData))

    if (!result.success) {
      return { error: result.error.errors[0].message } as K
    }

    return action(result.data, formData)
  }
}
