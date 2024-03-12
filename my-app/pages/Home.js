import React from 'react'
import Image from "next/image";
import Image1 from "../public/screenshot.png";
import '../app/globals.css'



const Home = () => {

    
  return (
    <div className="bg-sky-50 w-[50%] py-10 px-10 space-y-20 lg:block hidden">
        <div>
          <ul className="flex space-x-20 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="text-[40px] font-medium leading-snug">
          Claim Your <span className="text-sky-400">Vehicle</span> <br />
          Quickly
          <div className="text-[19px] opacity-50 font-normal">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit.
          </div>
        </div>
        <div>
          <Image src={Image1} alt="No Image Found" />
        </div>
      </div>
  )
}

export default Home