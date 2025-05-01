'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signUpEmail } from '@/lib/actions'
import { cn } from '@/lib/utils'
import { ActionState } from '@/lib/utils/parsed-action'
import Link from 'next/link'
import { useActionState } from 'react'
import { toast } from 'sonner'

const defaultValues = { error: '' } as const

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    async (_, formData) => {
      const { data, error } = await signUpEmail(_, formData)

      if (error.statusCode === 422) toast.error('User already exists!')

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
                <Label htmlFor='name'>Name</Label>
                <Input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='John Doe'
                  required
                  defaultValue={state.name}
                />
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='m@example.com'
                  required
                  defaultValue={state.email}
                />
              </div>
              <div className='grid gap-3'>
                <div className='flex items-center'>
                  <Label htmlFor='password'>Password</Label>
                </div>
                <Input
                  id='password'
                  name='password'
                  type='password'
                  required
                  defaultValue={state.password}
                />
              </div>
              <Button type='submit' className='w-full' disabled={pending}>
                Sign up
              </Button>
            </div>
            <div className='text-sm text-red-500'></div>

            <div className='mt-4 text-center text-sm'>
              Already have an account?{' '}
              <Link href='/login' className='underline underline-offset-4'>
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
