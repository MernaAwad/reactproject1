import React from 'react'
import {Link} from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({userId,id,title,body,categories,img}) => {
  const shortDescription= body.length >145? body.substr(0,145)+'...':body;
  const postTitle= title.length>30? title.substr(0,30)+'...':title;
  return (
  <article className='post flex flex-wrap flex-row m-6 border-2'>
    <div className="post__img">
        <img className='h-40' src={img} alt="" />
    </div>
    <div className="post__Content">
        <Link to={`posts/${id}`}>
        <h3> {postTitle}</h3>
        </Link>
        <p>{shortDescription}</p>
    </div>
    <div className='flex flex-col justify-between'>
    <div className='btn block'>
      <Link to={"posts/categories/category"}>
      <p>{categories}</p>
      </Link>
    </div>
    <div className="post__author">
        <PostAuthor/>
    </div>
    </div>

  </article>
  )
}

export default PostItem