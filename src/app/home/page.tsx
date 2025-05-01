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
    <div className='flex min-h-screen flex-col items-center justify-center gap-2'>
      <p className='text-white'>User: {user.name}</p>
      <LogoutButton />
    </div>
  )
}
