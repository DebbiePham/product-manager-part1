import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";
    
const UpdateForm = (props) => {
    const { id } = useParams();
    const [newTitle, setNewTitle] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setNewTitle(res.data.product.title);
                setNewPrice(res.data.product.price);
                setNewDescription(res.data.product.description);
                console.log(res.data.product)
            })
            .catch((err) => {
                console.log('Error with axios get', err)
            })
    }, []);
    
    const updateProduct = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/products/' + id, {
            title: newTitle,
            price: newPrice,
            description: newDescription
        })
            .then(res=> {
                console.log(res)
                navigate ('/products/' + id)
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div className='contanier p-5'>
            <div class="card shadow">
                <div class="card-header">
                    <h1>Update a Product</h1>
                </div>
                <div className="card-body text-center">
                    <form onSubmit={updateProduct}>
                        <p className='d-flex gap-3'>
                            <label htmlFor='update-title' className='fw-bold'>Update Title: </label><br/>
                            <input id='update-title' type="text" onChange={(e)=>setNewTitle(e.target.value)} value={newTitle}/>
                        </p>
                        <p className='d-flex gap-3'>
                            <label htmlFor='update-price' className='fw-bold'>Update Price: </label><br/>
                            <input id='update-price' type="text" onChange={(e)=>setNewPrice(e.target.value)} value={newPrice}/>
                        </p>
                        <p className='d-flex gap-3'>
                            <label htmlFor='update-description' className='fw-bold'>Update Description: </label><br/>
                            <input id='update-description' type="text" onChange={(e)=>setNewDescription(e.target.value)} value={newDescription}/>
                        </p>
                        <div className='card-footer text-start'>
                            <input type="submit" className='btn btn-success m-3'/>
                            <Link to = '/' className='btn btn-primary'>Home Page</Link>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}
    
export default UpdateForm;

