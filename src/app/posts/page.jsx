import React from 'react'

const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
    return data
}


export default async function Posts() {
    const posts = await getPosts()
  return (
    <div className='space-y-6'>
        {
            posts.map((singlePost) =>{
                return <>
                 <div className='border border-red-800 p-4 rounded-2xl shadow-lg' key={singlePost.id}>
                    <p>{singlePost.title}</p>
                    <p>{singlePost.body}</p>
                 </div>
                </>
            })
        }
    </div>
  )
}
