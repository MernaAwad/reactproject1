import React from 'react'
import {Link} from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className='my-container text-center pt-52'>
      <h2 className=''>Error 404 page not found</h2>
        <button className='mybtn mt-10'>
         <Link to='/'> Go back Home</Link>
        </button>
    </div>
  )
}

export default ErrorPage