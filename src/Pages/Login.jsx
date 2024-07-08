import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Login = () => {
  return (
 <>
 <div className="login w-full h-screen flex flex-col justify-center items-center bg-green-50">
 <Link t className=" my-10 flex items-center  gap-2 text-[18px] font-semibold">
        <FaCartShopping className="text-4xl text-primary" />{" "}
        <span className="font-bold">Shopi</span>
      </Link>
  <div className="login-form w-[25%] flex flex-col bg-white justify-center border border-primary rounded-lg py-5 items-center">

  <div className="heading text-2xl font-bold py-5">Login</div>
  <form className="form w-full px-5 flex flex-col gap-3 justify-center items-center">
    <input className='px-3 py-2 border border-primary rounded-full w-full' placeholder='Enter email' type="text" />
    <input className='px-3 py-2 border border-primary rounded-full w-full' placeholder='Enter password' type="text" />
    <button className='w-full rounded-full py-2 bg-primary text-white'>Login</button>
  </form>
  <p className='my-2'>Want account ? <Link to={'/signup'} className='text-primary' >SignUp</Link></p>
  </div>
  
 </div>
 </>
  )
}

export default Login