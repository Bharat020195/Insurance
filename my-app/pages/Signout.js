"use client"
import React from 'react';
import cookie from 'cookie';
import { useRouter } from 'next/navigation';

const Signout = () => {
  const router = useRouter()
  const handleClick = () => {
    document.cookie = cookie.serialize('jwt', '', {
      path: '/',
      expires: new Date(0),
    });
  };

  return <div onClick={handleClick}>{router.push('/')}</div>;
};

export default Signout;
