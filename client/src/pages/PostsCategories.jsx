import React, { useState } from 'react'
import PostItem from '../components/PostItem'
import { DUMMY_POSTS } from './Data'

const PostsCategories = () => {

 const[posts,setPosts] = useState(DUMMY_POSTS)

  return (
    <section className='posts'>
     
    {posts.length>0? <div className="posts__container">
    {
          posts.map(({userId,id,title,body,categories})=>
          <PostItem key={id} userId={userId} id={id} title={title} body={body} categories={categories}/>)
    }
    </div>: <h2 className='text-center'>
      No posts found!
    </h2>}
    
  </section>
  )
}

export default PostsCategories