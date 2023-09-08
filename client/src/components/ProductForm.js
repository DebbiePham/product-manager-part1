import React, { useState } from 'react'
import axios from 'axios';


   
const ProductForm = ()  => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    //handler when the form is submitted
    const onSubmitHandler = e => {

        //prevent default behavior of the submit
        e.preventDefault();

        //make a post request to create a new product
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description,
        })
            .then(res=> {
                console.log(res)
                setTitle('')
                setPrice('')
                setDescription('')
                setSuccessMessage('The product has been added successfully!');
                setTimeout(() => {
                    setSuccessMessage(''); // clear success message after a 5 seconds
                }, 5000)
            })
            .catch(err=>console.log(err))

    }
    //onChange to update firstName and lastName
    return (
        <div className="container p-5">
            <div className="card shadow p-4">
                <div className='card-header'>
                    <h1>Product Manager</h1>
                </div>
                <div className="card-body text-center">
                    {successMessage && (
                        <div className='alert alert-success'>{successMessage}</div>
                    )}
                    <form onSubmit={onSubmitHandler}>
                        <p className='d-flex gap-3'>
                            <label htmlFor='title' className='fw-bold'>Title: </label><br/>
                            <input id='title' type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                        </p>
                        <p className='d-flex gap-3'>
                            <label htmlFor='price' className='fw-bold'>Price: </label><br/>
                            <input id='price' type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                        </p>
                        <p className='d-flex gap-3'>
                            <label htmlFor='description' className='fw-bold'>Description: </label><br/>
                            <input id='description' type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                        </p>
                        <input type="submit" className='btn btn-success'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductForm;

