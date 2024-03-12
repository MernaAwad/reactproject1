import React from 'react'
import { useState } from 'react'
import PostItem from './PostItem'
import {DUMMY_POSTS} from '../pages/Data'
const Posts = () => {
    const[posts,setPosts] = useState(DUMMY_POSTS)

  return (
    <section className='posts'>
     
      {posts.length>0? <div className="posts__container">
      {
            posts.map(({userId,id,title,body,categories,img})=>
            <PostItem key={id} img={img} userId={userId} id={id} title={title} body={body} categories={categories} />)
      }
      </div>: <h2 className='text-center'>
        No posts found!
      </h2>}
      
    </section>
  )
}

export default Posts