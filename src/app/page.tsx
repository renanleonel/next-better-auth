'use client';

import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div className='flex h-screen min-h-screen items-center justify-center bg-black'>
      <div className='w-full max-w-md'>
        <Input
          type='text'
          placeholder='Enter your name'
          className='text-white'
        />
      </div>
    </div>
  );
}
