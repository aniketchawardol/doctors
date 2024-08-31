import React from 'react'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <>
<div className='flex bg-teal-100 justify-center h-screen items-center animate-appear'>
<div className='flex flex-col items-center'>
<Link to="/" className='buttons'>Back to Homepage</Link>
  <div className='border-2 rounded-3xl text-center bg-white drop-shadow-2xl '>
    <p className='mx-3 my-5 sm:float-start text-lg font-custom2'>Welcome to Doctors.com</p>
    <div className='inline-block mx-2 border-l-2 pl-2 my-4'>
   <Link className='signupbuttons'>New Patient</Link>
   <Link className='signupbuttons'>For Hospitals</Link>
   <Link className='signupbuttons'>For Laboratories</Link></div>
  </div>
</div>
</div>
    </>
  )
}

export default Signup