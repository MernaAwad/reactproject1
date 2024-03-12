// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import profileImg from '../image-project/img1.jpg'
// import { FaEdit } from "react-icons/fa";
// import { FaCheck } from "react-icons/fa";
// const UserProfile = () => {
//     const[userImg,setUserImg]= useState(profileImg);
//   const[userName,setUserName]= useState('');
//   const[userEmail,setUserEmail]= useState('');
//   const[userPassword,setUserPassword]= useState('');
//   const[userNewPassword,setUserNewPassword]= useState('');
//   const[userConfirmPassword,setUseConfirmPassword]= useState('');
//   return (
//     <section className='profile m-auto pt-20 pb-20'>
//     <div className="container profile__container flex flex-col justify-between align-bottom">
//       <Link to={'/posts/users/:id'} className='btn btn-primary w-32 m-auto'>My Posts</Link>
//       <div className="profile__details w-100">
//         <div className="profile__wrapper">
//           <div className="profile__img">
//             <img src={userImg} alt='Img profile'className=''/>
//           </div>
//           <form action="" className=' form__img'>
//             <input type="file" name='img' id='img' accept='png, jgp, jpeg' onChange={e=>setUserImg(e.target.files[0])} />
//             <label htmlFor="img bg-slate-500" ><FaEdit/></label>
//           </form>
//           <button className='profile__img-btn btn'><FaCheck/></button>
//         </div>
//         <h1>Ereny Robin</h1>
//         <form className='form profile__form'>
//           <p className='form form-error_message bg-red-600	text-white p-2.5 mt-3 mb-4 rounded-md text-xl'>This is an error message</p>
//           <input type="text" name="Full Name" placeholder='Full Name' className='mb-4' value={userName} onChange={e=>setUserName(e.target.value)}/>
//           <input type="email" name="Email" placeholder='Email' className='mb-4' value={userEmail} onChange={e=>setUserEmail(e.target.value)}/>
//           <input type="password" name="Password" placeholder='Password' className='mb-4' value={userPassword} onChange={e=>setUserPassword(e.target.value)}/>
//           <input type="password" name="New Password" placeholder='New Password'className='mb-4' value={userNewPassword} onChange={e=>setUserNewPassword(e.target.value)}/>
//           <input type="password" name="Confirm Password" placeholder='Confirm Password'className='mb-4' value={userConfirmPassword} onChange={e=>setUseConfirmPassword(e.target.value)}/>
//           <button type='submit' className='btn btn-primary text-center'>Update Details</button>
//         </form>
//       </div>
//     </div>
//   </section>
//   )
// }

// export default UserProfile
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../image-project/img1.jpg';
import { FaEdit, FaCheck } from 'react-icons/fa';

const UserProfile = () => {
  const [userImg, setUserImg] = useState(profileImg);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userNewPassword, setUserNewPassword] = useState('');
  const [userConfirmPassword, setUseConfirmPassword] = useState('');

  const [formError, setFormError] = useState('');

  const validateForm = () => {
    if (!userName.trim() || !userEmail.trim() || !userPassword.trim()) {
      setFormError('Please fill in all the required fields.');
      return false;
    } else if (userNewPassword !== userConfirmPassword) {
      setFormError('New password and confirm password do not match.');
      return false;
    }

    setFormError('');
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform your update details logic here
      console.log('Details updated successfully');
    }
  };

  return (
    <section className="profile m-auto pt-20 pb-20">
      <div className="container profile__container flex flex-col justify-between align-bottom">
        <Link to={'/posts/users/:id'} className="btn btn-primary w-32 m-auto">
          My Posts
        </Link>
        <div className="profile__details w-100">
          <div className="profile__wrapper">
            <div className="profile__img">
              <img src={userImg} alt="Img profile" className="" />
            </div>
            <form action="" className="form__img">
              <input
                type="file"
                name="img"
                id="img"
                accept="png, jpg, jpeg"
                onChange={(e) => setUserImg(e.target.files[0])}
              />
              <label htmlFor="img bg-slate-500">
                <FaEdit />
              </label>
            </form>
            <button className="profile__img-btn btn">
              <FaCheck />
            </button>
          </div>
          <h2 className='mb-3'>Ereny Robin</h2>
          <form className="form profile__form" onSubmit={handleFormSubmit}>
            {formError && (
              <p className="form form-error_message bg-red-600 text-white p-2.5 mt-3 mb-4 rounded-md text-xl">
                {formError}
              </p>
            )}
            <input
              type="text"
              name="Full Name"
              placeholder="Full Name"
              className="mb-4"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="mb-4"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <input
              type="password"
              name="Password"
              placeholder="Password"
              className="mb-4"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <input
              type="password"
              name="New Password"
              placeholder="New Password"
              className="mb-4"
              value={userNewPassword}
              onChange={(e) => setUserNewPassword(e.target.value)}
            />
            <input
              type="password"
              name="Confirm Password"
              placeholder="Confirm Password"
              className="mb-4"
              value={userConfirmPassword}
              onChange={(e) => setUseConfirmPassword(e.target.value)}
            />
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-3"
        >
          Update data
        </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
