import Link from 'next/link';
import React from 'react'

const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
    return data
}


export default async function Posts() {
    const posts = await getPosts()
  return (
    <div className='gap-5 grid grid-cols-4'>
        {
            posts.map((singlePost) =>{
                return <>
                 <div className='border border-red-800 p-4 rounded-2xl shadow-lg' key={singlePost.id}>
                    <p>{singlePost.title}</p>
                    <p>{singlePost.body}</p>
                     <Link href={`/posts/${singlePost.id}`}><button className='bg-green-600 rounded-2xl px-4 p-3 text-white'>Details</button></Link>
                 </div>
                </>
            })
        }
    </div>
  )
}
