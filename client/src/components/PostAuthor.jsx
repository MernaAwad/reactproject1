import React from 'react'
import {Link} from 'react-router-dom'
const PostAuthor = () => {
  return (
    <Link to={'posts/users/:id'}>
        <div className="post__author-avater">
            <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoteBCdxEZdBwBAqPYs0Kf8b1f8g1KnWIWw&usqp=CAU" alt="" />
        </div>
        <div className="post__author-details">
            <h5>By:Hana Mogrhan</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor