import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function Home() {
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
