import Link from 'next/link'
import React from 'react'

export default function NotFoundPage() {
  return (
    <div>
        <div className='flex justify-center items-center'>
          <div>
             <h1>404 Not Found Page</h1>
             <Link href="/">Go Back to Home</Link>
          </div>
        </div>
    </div>
  )
}
