'use server'

import { auth } from '@/lib/auth'
import { LoginSchema, SignUpSchema } from '@/lib/types'

import { APIError } from 'better-auth/api'
import { redirect } from 'next/navigation'
import { parsedAction } from './utils/parsed-action'

export const signUpEmail = parsedAction(SignUpSchema, async (data) => {
  const { email, password, name } = data

  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    })
  } catch (error) {
    if (error instanceof APIError) {
      return {
        data,
        error: { ...error },
      }
    }
  }

  redirect('/home')
})

export const loginEmail = parsedAction(LoginSchema, async (data) => {
  const { email, password } = data

  try {
    await auth.api.signInEmail({ body: { email, password } })
  } catch (error) {
    if (error instanceof APIError) {
      return {
        data,
        error: { ...error },
      }
    }
  }

  redirect('/home')
})
