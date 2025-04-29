'use server'

import { auth } from '@/lib/auth'
import { LoginSchema, SignUpSchema } from '@/lib/types'

import { redirect } from 'next/navigation'
import { parsedAction } from './utils/parsed-action'

export const signUpEmail = parsedAction(SignUpSchema, async (data) => {
  const { email, password, name } = data

  await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
    },
  })

  redirect('/home')
})

export const loginEmail = parsedAction(LoginSchema, async (data) => {
  const { email, password } = data

  await auth.api.signInEmail({
    body: { email, password },
  })

  redirect('/home')
})
