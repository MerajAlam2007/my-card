
import React from 'react'
import { FaHeart } from "react-icons/fa";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
}
  
 from "@/components/ui/card"



function page() {
  

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-200'>
    <Card className="w-100 h-110">
  
    <CardHeader>
      <div className="flex ">
    <img src='https://images.unsplash.com/photo-1632226390535-2f02c1a93541?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 'width={25} className='rounded-4xl'/>
    <CardTitle className="text-2xl ">Jospeh Andreson</CardTitle>
  </div>
    
    <CardDescription className="text-gray-500">Posted 2h ago</CardDescription>
    <CardAction>
     <FaHeart size={25} />
    </CardAction>
  </CardHeader>
  <CardContent>
    <p className='text-lg'> Looking SM Manager to create <br></br>  posts across varius platforms </p>
    <p className='text-gray-500'>This is shade design ui</p>
  </CardContent>
  <div className='flex gap-2 ml-4 '>
    <p className='bg-amber-200 w-10'>SMM</p>
    <p className='bg-amber-700 w-24'>Growth Strategy</p>
    <p className='bg-blue-500 w-12'>Startup</p>
    <p className='bg-red-500 w-12'>Brand</p>
  </div>
    <h1 className='text-2xl ml-4'>$150 $200/h</h1>
    <p className="text-gray-500  ml-4">Hourly rate = 100% Remote</p>
    <button className='bg-blue-500 rounded-lg py-2 text-white m-2'>Apply</button>
  <CardFooter className="bg-amber-400 ">
    <p className='text-2xl ml-28'>Card Footer</p>
    
  </CardFooter>
</Card>
      </div>
  )
}

export default page
