import StudentInfo from './StudentInfo'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-8 p-24 justify-center">
      <h1 className='text-3xl pb-3'>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link className="hover:underline" href="\week2">Week 2</Link>
      <Link className="hover:underline" href="\week3">Week 3</Link>
      <Link className="hover:underline" href="\week4">Week 4</Link>
      <Link className="hover:underline" href="\week5">Week 5</Link>
      <Link className="hover:underline" href="\week6">Week 6</Link>
      
    </main>
  )
}
