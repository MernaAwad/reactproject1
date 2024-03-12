import React from 'react'
import {DUMMY_POSTS} from '../pages/Data'
import PostItem from '../components/PostItem'
import { useState } from 'react'
const UserPosts = () => {
  const[posts,setPosts] = useState(DUMMY_POSTS)

  return (
    <section className='posts'>
     
    {posts.length>0? <div className="posts__container">
    {
          posts.map(({userId,id,title,body,categories,img})=>
          <PostItem key={id} img={img} userId={userId} id={id} title={title} body={body} categories={categories}/>)
    }
    </div>: <h2 className='text-center'>
      No posts found!
    </h2>}
    
  </section>
  )
}

export default UserPosts