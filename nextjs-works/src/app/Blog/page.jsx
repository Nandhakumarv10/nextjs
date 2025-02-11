import React from 'react'


export  default async function Blog() {

  const data = await fetch ('https://jsonplaceholder.typicode.com/posts');
  const posts = await data.json();


  return (
    <>
    <div>
    {posts.map((post)=>(<div key={post.id}>blog : {post.title}</div>
    ))}

    </div>
    
    </>
    
  )
}
