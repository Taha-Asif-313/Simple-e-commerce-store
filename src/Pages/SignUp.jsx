import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
    <div className="login w-full h-screen flex flex-col justify-center items-center bg-green-50">
    <div className=" my-10 flex items-center  gap-2 text-[18px] font-semibold">
           <FaCartShopping className="text-4xl text-primary" />{" "}
           <span className="font-bold">Shopi</span>
         </div>
     <div className="login-form w-[25%] flex flex-col bg-white justify-center border border-primary rounded-lg py-5 items-center">
   
     <div className="heading text-2xl font-bold py-5">SignUp</div>
     <form className="form w-full px-5 flex flex-col gap-3 justify-center items-center">
     <input className='px-3 py-2 border border-primary rounded-full w-full' placeholder='Enter Name' type="text" />
       <input className='px-3 py-2 border border-primary rounded-full w-full' placeholder='Enter email' type="text" />
       <input className='px-3 py-2 border border-primary rounded-full w-full' placeholder='Enter password' type="text" />
       <button className='w-full rounded-full py-2 bg-primary text-white'>Login</button>
     </form>
     <p className='my-2'>Already have account ? <Link to={'/login'} className='text-primary' >Login</Link></p>
     </div>
     
    </div>
    </>
  )
}

export default SignUp