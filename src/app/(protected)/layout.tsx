import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

type Layout = Readonly<{
  children: React.ReactNode
}>

export default async function ProtectedLayout({ children }: Layout) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) redirect('/login')

  return <div>{children}</div>
}
