import React, { useState } from 'react'

const EditPosts = () => {
  const [title,setTitle]= useState('')
  const [categories,setCategory]= useState('UnCatorized')
  const [description,setDescription]= useState('')
  const [img,setImg]= useState('')

  const POST_CATEGORIES=['Agriculture','Buisness','Art','History']

  return (
   
    <section className='create-post'>
      <div className="container">
        <h2> Edit Post</h2>
      </div>
      <p className='form__error-message  bg-red-600	text-white p-2.5 mt-3 mb-4 rounded-md text-xl'>This is an error message</p>
      <form className='form create-post__form'>
        <input type="text" name="Title" value={title} onChange={e=>setTitle(e.target.value)} autoFocus/>
        <select name="category" id="" value={categories} onChange={e=>setCategory(e.target.value)}>
          {
            POST_CATEGORIES.map(cat=><option key={cat}>{cat}</option>)
          }
        </select>
        <textarea name="description" value={description} rows="4" cols="50" onChange={e=>setDescription(e.target.value)}> 

        </textarea>
        <input type="file" value={img} onChange={e=>setImg(e.target.value)} accept='png, jpg, jpeg' />
        <button type='submit' className='btn btn-primary'>Edit</button>
      </form>
    </section>
  )
}

export default EditPosts