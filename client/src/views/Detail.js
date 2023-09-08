import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
    
const Detail = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data.product))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div className='container p-5'>
            <div class="card shadow">
                <div className='card-header'>
                    <h1>Product Details</h1>
                </div>
                <div className="card-body">
                    <p><span className='fw-bold'>Title: </span>{product.title}</p>
                    <p><span className='fw-bold'>Price: </span>${product.price}.00</p>
                    <p><span className='fw-bold'>Description: </span>{product.description}</p>
                </div>
                <div className='card-footer text-start'>
                    <button className='btn btn-success' onClick={() => navigate(-1)}>Back</button>
                </div>
            </div>
        </div>
    );
}
    
export default Detail;

