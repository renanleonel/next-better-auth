import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

type Layout = Readonly<{
  children: React.ReactNode
}>

export default async function AuthLayout({ children }: Layout) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (session) redirect('/home')

  return <div>{children}</div>
}
