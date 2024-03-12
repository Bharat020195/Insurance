import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import '../app/globals.css'
import { LuBell } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import Header1 from './Header1';
import Banner from './Banner';
import Claims from './Claims';
import Header2 from './Header2';


const Welcome = () => {
  const [user, setUser] = useState(null);
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

  if (!user) {
    return (

    <Link href='/'>Please Sign In back by clicking here</Link>
    )
  }
  
  return (
    <div>
      <title>Home</title>
     

      {user && 
      <div className='flex flex-col'>
         <Header1/>
         <Header2 />       
        <Banner />
        <Claims />
        </div>}
    </div>
  );
}

export default Welcome;
