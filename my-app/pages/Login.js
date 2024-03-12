import React from 'react'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import axios from "axios";




function sleep(ms) {
return new Promise((resolve) => setTimeout(resolve, ms));
}

const Login = () => {


   const [data, Setdata] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [error, setError] = useState(false)
  const [Status, SetStatus] = useState({Loading: false , error: false})

  
  const router = useRouter();


  
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") SetEmail(value);
    if (name === "username") SetUsername(value);
    if (name === "password") setPassword(value);
    if (name === "confirmpassword") setconfirmPassword(value);
  };


  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleconfirmPassword = () => {
    setShowconfirmPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
    Setdata(false);
  };

  const handleLoginClick = () => {
    setIsSignUp(false);
    Setdata(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://127.0.0.1:1337/api/auth/local/register`, {
        username,
        email,
        password,
      })

      console.log(response)

      alert("Thank you for registering");
      SetEmail("");
      SetUsername("");
      setPassword("");
      setconfirmPassword("");
    } catch (error) {
      alert("Please check the details and try again");
      console.error("Error Registering:", error);
    }
  };

  const onSubmit1 = async (e) => {
    e.preventDefault();
    SetStatus({Loading:true, error:false} )
    await sleep(500)
    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });
     
      router.push('/Welcome')
      
      SetStatus({Loading:false, error:false} )

    } catch (error) {
      SetStatus({Loading:false, error:true} )
      console.error('Error during login:', error);


    }
  };
  return (

    
    <div className=" w-[50%] flex lg:justify-end  my-10 relative">
    <div className="flex gap-10 mx-10">
      <div
        className={`text-sky-400 p-4 border border-sky-400 h-10 w-28 flex items-center justify-center rounded-2xl cursor-pointer ${
          data ? "bg-sky-400 text-white" : "bg-transparent"
        }`}
        onClick={() => handleLoginClick()}
      >
        Login
      </div>
      {data && (
        <div className="absolute mt-20 left-20 ">
          <div className="text-4xl underline font-semibold underline-offset-8 decoration-sky-400">
            Login
          </div>
          <form className="space-y-10 mt-20" onSubmit={onSubmit1}>
            <div className="flex h-12 items-center shadow-lg lg:w-[600px] w-80 rounded-xl p-4 gap-4">
              <FaUser size={30} className="text-sky-400" />
              <input
                type="email"
                name="email"
                value={email}
                required
                onChange={(e) => SetEmail(e.target.value)}
                placeholder="Email"
                className="outline-none w-full text-sm"
              />
            </div>
            <div className="flex h-12 items-center shadow-lg lg:w-[600px] w-80 rounded-xl p-4 gap-4">
              <RiLockPasswordFill size={30} className="text-sky-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 outline-none"
              />
              {showPassword ? (
                <FaEyeSlash onClick={handleTogglePassword} />
              ) : (
                <FaEye onClick={handleTogglePassword} />
              )}
            </div>
            {Status.error && (
              <p className='text-red-500'>Invalid Credentials</p>
             )}
            
            {Status.Loading? (
              <p>Loading ...</p>
            ) : ( <button
              className="flex justify-center lg:w-[600px] w-80 bg-sky-400 h-12 items-center text-white rounded-xl"
              type="submit"
            >
              Login
            </button> )}
           
          </form>
          <div className="lg:w-[600px] w-80 flex justify-center items-center mt-10">
            Or Login with
          </div>
          <div className="flex mt-10 gap-10 justify-center">
            <FaApple size={70} className="p-2 shadow-lg rounded-full " />
            <FaGoogle size={70} className="p-2 shadow-lg rounded-full " />
            <FaFacebook
              size={70}
              className="p-2 shadow-lg rounded-full text-blue-700"
            />
          </div>
        </div>
      )}
      <div
        className={`text-sky-400 p-4 border border-sky-400 h-10 w-28 flex items-center justify-center rounded-2xl cursor-pointer ${
          isSignUp ? "bg-sky-400 text-white" : "bg-transparent"
        }`}
        onClick={() => handleSignUpClick()}
      >
        Sign Up
      </div>

      {isSignUp && (
        <div className="absolute mt-20 left-20 ">
          <div className="text-4xl underline font-semibold underline-offset-8 decoration-sky-400">
            Sign Up
          </div>
          <form className="space-y-10 mt-20 " onSubmit={onSubmit}>
            <div className="flex h-12 items-center shadow-lg lg:w-[600px] w-80 rounded-xl p-4 gap-4">
              <FaUser size={30} className="text-sky-400" />
              <input
                type="text"
                name="username"
                placeholder="User Name"
                onChange={(e) => SetUsername(e.target.value)}
                value={username}
                className="outline-none w-full text-sm"
              />
            </div>
            <div className="flex h-12 items-center shadow-lg lg:w-[600px] w-80 rounded-xl p-4 gap-4">
              <MdOutlineEmail size={30} className="text-sky-400" />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
                placeholder="Email"
                className="outline-none w-full text-sm"
              />
            </div>
            <div className="flex h-12 items-center shadow-lg lg:w-[600px] w-80 rounded-xl p-4 gap-4">
              <RiLockPasswordFill size={30} className="text-sky-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 outline-none"
              />
              {showPassword ? (
                <FaEyeSlash onClick={handleTogglePassword} />
              ) : (
                <FaEye onClick={handleTogglePassword} />
              )}
            </div>
            <div className="flex h-12 items-center shadow-lg lg:w-[600px] w-80 rounded-xl p-4 gap-4">
              <RiLockPasswordFill size={30} className="text-sky-400" />
              <input
                type={showconfirmPassword ? "text" : "password"}
                placeholder="confirm password"
                name="confirmpassword"
                value={confirmpassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
                className="w-full p-2 outline-none"
              />
              {showconfirmPassword ? (
                <FaEyeSlash onClick={handleToggleconfirmPassword} />
              ) : (
                <FaEye onClick={handleToggleconfirmPassword} />
              )}
            </div>
            <button className="flex justify-center lg:w-[600px] w-80 bg-sky-400 h-12 items-center text-white rounded-xl">
              Sign Up
            </button>
          </form>
          <div className="lg:w-[600px] w-80 flex justify-center items-center mt-6">
            Or Sign Up with
          </div>
          <div className="flex mt-6 gap-10 justify-center">
        

            <FaApple size={70} className="p-2 shadow-lg rounded-full " />
          
  
      <FaGoogle size={70} className="p-2 shadow-lg rounded-full" />

           
            <FaFacebook
              size={70}
              className="p-2 shadow-lg rounded-full text-blue-700"
            />
          </div>
        </div>
      )}
    </div>
  </div>
  )
}










export default Login