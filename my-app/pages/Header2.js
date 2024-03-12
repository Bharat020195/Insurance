import React, { useEffect, useState } from 'react'
import { LuBell } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import axios from 'axios';
const Header2 = () => {

    const[user, setUser] = useState([]);
    
    useEffect (() => {
    
        const fetchData = async () =>{

            try {

                const response = await axios.get ('/api/user');

                setUser(response.data)
                
                
            } catch (error) {
                console.error("No name found", error)
            }
        } 
       
        fetchData();
    }, [])
    
  return (
    <div>
        <div className='flex bg-white h-20 lg:w-[1450px] w-96 md:w-[650px] shoadow-2xl justify-end items-center px-20 py-10'>
        <div className=''> 
          <ul className='flex items-center gap-10'>
            <li className='border p-2 rounded-2xl'><LuBell size={30}/></li>
            <li className='flex border justify-end w-48 rounded-xl h-12 items-center gap-2 px-1'>{user.name}<IoIosArrowDown size={30}/></li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Header2