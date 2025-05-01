import { LogoutButton } from '@/components/logout-button'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) return

  const { user } = session

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-2'>
      <p className='text-white'>User: {user.name}</p>
      <LogoutButton />
    </div>
  )
}
