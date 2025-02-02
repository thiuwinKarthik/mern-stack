const express = require('express')
const router = express.Router()
const Product = require('../productModel/product.model')
const mongoose = require('mongoose')


router.post('/create',async (req,res)=>{
    const { name, price, image } = req.body
    if(!name){
       return res.status(400).json({success:false,message:"fill the name"})
    }
    else if(!price){
        return res.status(400).json({success:false,message:"fill the price"})
    }
    else if(!image) {
        return res.status(400).json({success:false,message:"fill the imageurl"})
    }
    const newProduct = new Product({ name, price, image })
    try
    {
        await newProduct.save()
       return res.status(200).json({success:true, message:"product created successfully"})
    }
    catch(error)
    {
        
       return res.status(400).json({success:false, message:"issues in product creating"})
    }
})

router.get('/',async (req,res)=>{
    try
    {   
        const product = await Product.find({})
        
        res.status(200).json(product)
    }
    catch(error)
    {
        res.status(400).json({success:false,message:"error in fetching products"})
    }
})
router.delete('/:id',async (req,res)=>{
     const { id } = req.params
     if(!mongoose.Types.ObjectId.isValid(id))
        {
           return res.status(404).json({success:false, message:"page not found"})
        }
     try
     {
        await Product.findByIdAndDelete(id)
       return  res.status(200).json({success:true, message:"product deleted successfully"})
     }
     catch(error)
    {
       return res.status(400).json({success:false,message:"error in deleting products"})
    }

})
router.put('/:id',async (req,res)=>{
    const { id }=req.params
    const product = req.body
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({success:false, message:"page not found"})
    }
    try
    {
        await Product.findByIdAndUpdate(id,product,{new:true})
        res.status(200).json({success:true, message:"product updated successfully"})
     }
     catch(error)
    {
        res.status(400).json({success:false,message:"error in updating products"})
    }
    
})

module.exports = router