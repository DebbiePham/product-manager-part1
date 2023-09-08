import { Link } from 'react-router-dom';
// import axios from 'axios';
import React from 'react';
    
const ProductList = (props) => {
    
    return (
        <div class="container">
            <div className='card showdow text-center'>
                <div className='card-header'>
                    <h1>All Products:</h1>
                </div>
                <div class="card-body">
                    {props.products.map( (product, index) => {
                        return (
                            <p key={index}>
                                <Link to={`/products/${product._id}`}>{product.title}</Link>
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
    
export default ProductList;

