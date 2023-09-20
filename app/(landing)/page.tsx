import { Button } from '@/components/ui/button'
import Link  from 'next/link'


export default function Home() {
  return (
   <div>
    <p className='text-6xl text-green-500'>Hi welcome to G-GPT</p>
    <Link href="/sign-in">
    <Button variant="default">Login</Button>
    </Link>

    <Link href="/register">
      <Button variant="default">Register</Button>
    </Link>
   </div>
  )
}
