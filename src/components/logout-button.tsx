'use client'

import { authClient } from '@/lib/auth-client'
import { redirect } from 'next/navigation'
import { Button } from './ui/button'

export const LogoutButton = () => {
  return (
    <Button
      onClick={async () => {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              redirect('/login')
            },
          },
        })
      }}
    >
      logout
    </Button>
  )
}
