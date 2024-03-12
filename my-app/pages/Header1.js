import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { MdOutlineLogout, MdPending } from "react-icons/md";
import { useRouter } from 'next/router';


const Header1 = () => {
     const[user, setUser] = useState();
    const router = useRouter();


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('/api/user');
            setUser(response.data);
          } catch (error) {
            console.error("Unable to retrieve User", error);
            window.location.href = '/'
          }
        };
        fetchData();
      }, []);
    

      const handleSignOut = async () =>{
        await axios.get('/api/logout')
        setUser(undefined
        );
        router.push('/')
       }
    

  return (

    <div className='flex bg-sky-50 lg:w-[1440px] w-[600px] md:w-[820px]'>
         <title>Home</title>
        {user && 
     
      <div className='lg:h-screen h-[1300px] w-56 bg-white shadow-xl flex py-20 justify-center fixed'>
        <ul className='space-y-10'>
          <Link href='/Welcome' className={`flex items-center h-10 rounded-lg p-2 gap-4 w-44  ${router.pathname==='/Welcome' ? "bg-sky-400 text-white" : "bg-transparent"}`}> <RxDashboard  size={24}/><li>Dashboard</li></Link>
          <Link href='/Vehicle' className={`flex items-center h-10 rounded-lg p-2 gap-4 w-44  ${router.pathname==='/Vehicle' ? "bg-sky-400 text-white" : "bg-transparent"}`}><HiOutlinePaperAirplane size={24}/><li>My Vehicle</li></Link>
          <Link href='/Profile' className={`flex items-center h-10 rounded-lg p-2 gap-4 w-44  ${router.pathname==='/Profile' ? "bg-sky-400 text-white" : "bg-transparent"}`}> <RxPerson size={24}/><li>My Profile</li></Link>
          <button onClick={handleSignOut} className='flex items-center h-10 rounded-lg p-2 gap-4 w-44 text-red-700'> <MdOutlineLogout size={24} />Log out</button>
        </ul>
      </div>
      }
      </div>

  )
}

export default Header1