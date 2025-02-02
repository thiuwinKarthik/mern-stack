import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { FaTrash,FaSearch} from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const [products,setProduct] = useState([{}])
  const navigate = useNavigate()
useEffect(()=>{
    fetch('https://mern-stack-2-rvpa.onrender.com/api/products')
   .then(res => res.json())
   .then((data) =>{
    setProduct(data) 
  })
},[])

const handleDelete = async(id)=>{
    
  try{
     const res = await fetch(`https://mern-stack-2-rvpa.onrender.com/api/products/${id}`,{
      method:'DELETE',
     })
     if(res.ok){
      toast.success('Product Deleted successfully!');
      setProduct(products.filter((prod)=>prod._id!=id))
      console.log("product deleted");
     }
     else {
      console.log("error in deleting products")
     }
    }
    catch(e){
      console.log(e);
    }
    
}
const handleNav = () =>{
  navigate('/create')
}





    

  return (
    <>
    <Navbar/>
    <div className='h-screen bg-gradient-to-r from-white to-blue-200'>
      
      <div className='flex justify-center pt-5  '>
      <h1 className='text-3xl p-2 text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-blue-400'>Products</h1>

      </div>
      {products.length<1?
       <div className='flex justify-center mt-60'>
        <span className='text-2xl p-1 mt-1 text-blue-600'><FaSearch className=''/></span>
       <span className='text-3xl '>No Products Found</span>
       <h1 className='cursor-pointer text-1xl p-2 text-blue-600  hover:text-blue-900' onClick={handleNav}>Create</h1>
       </div>
       :
      <div className='grid grid-cols-1  md:grid-cols-2  md:ml-10 lg:grid-cols-3 ml-20 mt-10 gap-10 '>
      
       {products.map((prod,index)=>{
        return (
        <div key={index} className='relative bg-black  mr-50 w-4/5 h-80 md:w-80 md:h-80 rounded-2xl shadow-lg shadow-black   flex-col justify-around items-center hover:scale-105 duration-500   pt-3 pb-15'>
          <img className=' object-cover w-8/9 h-2/3 rounded-2xl ml-4'src={prod.image} alt='image'/>
          <center className=''><h1 className='text-white text-2xl mt-5 font-serif '>{prod.name}</h1></center>
         <center><span><button className='bg-yellow-500 mt-7 ml-3  px-3 py-1 font-bold rounded-2xl hover:bg-yellow-800  cursor-pointer '>${prod.price}</button></span>
          <span><button onClick={()=>handleDelete(prod._id)} className='bg-red-500 mt-7 ml-20 md:ml-40   p-3 font-bold rounded-2xl hover:bg-red-800  cursor-pointer '><FaTrash/></button></span></center> 
          
      </div>
       )})
       
       }
      
      
      
      </div>
}
    </div>
    </>
  )
}

export default Home;
