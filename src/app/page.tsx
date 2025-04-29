import { Button } from '@/components/ui/button'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (session) redirect('/home')

  return (
    <div className='flex h-full min-h-screen items-center justify-center gap-4'>
      <Link href='/signup'>
        <Button size='lg' className='cursor-pointer'>
          Sign up
        </Button>
      </Link>
      <Link href='/login'>
        <Button variant='outline' size='lg' className='cursor-pointer'>
          Login
        </Button>
      </Link>
    </div>
  )
}
