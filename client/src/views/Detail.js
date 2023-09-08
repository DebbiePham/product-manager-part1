import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
    
const Detail = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data.product))
            .catch(err => console.error(err));
    }, []);

    const deleteProduct = (id) => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                navigate('/');
            })
            .catch((err) => console.log(err))
    };
    
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
                    <Link to ={"/"} className='btn btn-success m-2'> Back Home </Link>
                    <Link to={"/products/" + product._id + "/edit"} className='btn btn-warning m-2'>Edit</Link>
                    <button className='btn btn-danger m-2' onClick={() => deleteProduct(product._id)}>Delete</button>
                </div>
            </div>
        </div>
    );
}
    
export default Detail;

