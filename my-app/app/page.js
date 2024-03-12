"use client";
import React from "react";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import '../app/globals.css'

const page = () => {
      
  return (
    <div className="flex w-full h-screen">
      <Home />
      <Login />
      
    </div>
  );
};

export default page;
