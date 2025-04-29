import { LogoutButton } from '@/components/logout-button'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) redirect('/login')

  const user = session.user

  return (
    <div>
      <div>authenticated: {user.name}</div>
      <LogoutButton />
    </div>
  )
}
