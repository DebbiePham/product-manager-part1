import React, { useEffect, useState } from "react";
import axios from 'axios';
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);



    const fetchProducts = () => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                setProducts(res.data.products);
                setLoaded(!loaded);
            })
            .catch((err) => console.error(err));
    };

    useEffect(fetchProducts, [loaded]); // Pass an empty dependency array to run the effect one 

    return (
        <div>
            <ProductForm />
            <hr />
            <ProductList products={products} />
        </div>
    );
};

export default Main;
