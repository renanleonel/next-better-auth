'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { loginEmail } from '@/lib/actions'
import { cn } from '@/lib/utils'
import { ActionState } from '@/lib/utils/parsed-action'
import Link from 'next/link'
import { useActionState } from 'react'
import { toast } from 'sonner'

const defaultValues = { error: '' } as const

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    async (_, formData) => {
      const { data, error } = await loginEmail(_, formData)

      if (error.statusCode === 401)
        toast.error('E-mail / password combination error')

      return data
    },
    defaultValues
  )

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardContent>
          <form action={formAction}>
            <div className='flex flex-col gap-6'>
              <div className='grid gap-3'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  required
                  id='email'
                  name='email'
                  type='email'
                  placeholder='m@example.com'
                  defaultValue={state.email}
                />
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='password'>Password</Label>
                <Input
                  required
                  id='password'
                  name='password'
                  type='password'
                  defaultValue={state.password}
                />
              </div>
              <div className='flex flex-col gap-3'>
                <Button type='submit' className='w-full' disabled={pending}>
                  Sign in
                </Button>
              </div>
            </div>
            {state.error && (
              <div className='text-sm text-red-500'>{state.error}</div>
            )}
            <div className='mt-4 text-center text-sm'>
              <Link href='/signup' className='underline underline-offset-4'>
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
