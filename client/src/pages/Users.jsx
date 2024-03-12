import React, { useState } from 'react'
import Img1 from '../image-project/img1.jpg'
import Img2 from '../image-project/img2.jpg'
import Img3 from '../image-project/img3.jpg'
import Img4 from '../image-project/img4.jpg'
import { Link } from 'react-router-dom'
const Users = () => {
  const userArr= [
    {id:1, name:"Roya",posts:5,img:Img1},
    {id:2, name:"Jo",posts:2,img:Img2},
    {id:3, name:"Rami",posts:1,img:Img3},
    {id:4, name:"Jo",posts:3,img:Img4},
  ]
  const[users,setUsers]=useState(userArr);
  return (
    <section className="user border border-red-500 pt-20 pb-44 p-20">

      {users.length > 0 ? <div className="container m-auto">
        <div className="users__container flex justify-between flex-wrap ">
          {
            users.map(({id,name,posts,img})=>{
              return <Link to={`posts/users/${id}`} className='users rounded-md w-72 flex gap-5 bg-white h-30 p-5'>
                <div className="user__img  ">
                  <img src={img} alt={`Image of ${name}`} className=''/>
                </div>
                <div className="user__name">
                  <h4>Name: {name}</h4>
                  <p>Posts: {posts}</p>
                </div>
              </Link>
            })
          }
        </div>
      </div> : <h2 className='text-center'>There is no users found!</h2>}
    </section>
  )
}

export default Users;