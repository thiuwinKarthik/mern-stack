import React, { useState } from 'react'
import Navbar from './Navbar'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const CreateProduct = () => {
  const [name,setName] = useState("")
  const [price,setPrice] = useState("")
  const [image,setImage] = useState("")

  
  const handleCreate = async (e)=>{
      e.preventDefault();
      const item ={ name, price , image }
    try{
      const res = await fetch("https://mern-stack-lovat.vercel.app/create",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(item)
      })
      setName("")
      setPrice("")
      setImage("")
      const data = await res.json()
      toast.success('Product created successfully!');
      console.log(data)
    }
    catch(e)
    {
      console.log(e)
    }
  }

  
  
  
  return (
      <>
      <Navbar/>
      <div className='h-full bg-gradient-to-r from-white to-blue-200'>
      <center><h1 className='text-3xl pt-10 mr-9 text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-blue-400'>Create Product</h1></center>
      <div  className='  w-full h-screen    '>
      
        
        <div className='flex flex-col p-5 justify-center items-center   h-screen   w-full  '>
          <form action=""  onSubmit={handleCreate} className='flex flex-col bg-gradient-to-r from-indigo-400 to-cyan-400 p-14 mb-15 rounded-md w-full md:w-3/5 md:h-3/5 '>
            <input name='name' type="text" placeholder='Enter Your Product Name' value={name} onChange={(e)=> setName(e.target.value)}  className='p-2 bg-transparent border-2 rounded-md text-black focus:outline-none my-5' required /> 
            <input name='price' type="text" placeholder='Enter Your Product Price' value={price} onChange={(e)=> setPrice(e.target.value)}  className='p-2 bg-transparent border-2 rounded-md text-black focus:outline-none my-5' required/>
            <input name='image' type="text" placeholder='Enter Your Product Image url' value={image} onChange={(e)=> setImage(e.target.value)}  className='p-2 bg-transparent border-2 rounded-md text-black focus:outline-none my-5' required/>
            
            <span name='ext' className='flex mb-5 sm:mt-5 justify-center'><button type='submit' className="group relative border-hidden overflow-hidden rounded bg-blue-600 px-8 py-4 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-green-600 hover:to-green-900 hover:ring-2 hover:ring-green-600 hover:cursor-pointer flex items-center">
            Create</button></span>
          </form>
          
        
      </div>
      
    </div>
    </div>
    </>
  )
}

export default CreateProduct
