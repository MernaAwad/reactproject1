import React from 'react'
// import PostAuthor from '../Components/PostAuthor'
import { Link } from 'react-router-dom'
const PostDetails = () => {
  return (
    <section className='post__details w-1/2 border-solid border-2 mt-16'>
      <div className="post-detail__header">
        {/* <PostAuthor/> */}
        <div className="post-detail__buttons">
        <Link to={"/posts/gdaferf/edit"} className='btn focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600'>Edit</Link>

          <Link to={"/posts/gdaferf/delete"} className='btn focus:outline-none text-white bg-red-600 hover:bg-red-700'>Delete</Link>
        </div>
      </div>
      <h1>Post1</h1>
      <div className="post-detail__img">
        <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="post-img" className='w-96 m-auto' />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cum, pariatur quos fugit minus repellat dicta, nostrum facere error culpa asperiores id reprehenderit atque ipsa minima sit soluta quaerat perspiciatis.</p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ad consequuntur asperiores. Quod, numquam hic odit velit sequi recusandae error, quibusdam nam animi natus qui aut nisi porro maiores quisquam.
      </p>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, recusandae? Eligendi est labore hic? Recusandae cumque esse beatae ratione commodi ullam animi saepe ipsam sint, fugiat, minima eius soluta corrupti?
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nemo corrupti odit animi quisquam dolor fugiat in natus optio dolore Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sint omnis quis eum totam repudiandae accusantium illo error nihil. Recusandae, eveniet. Odio et libero, tenetur accusantium dignissimos itaque voluptates corrupti.</p>
    </section>
  )
}

export default PostDetails