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
                setLoaded(true);
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        fetchProducts();
    }, []); // Pass an empty dependency array to run the effect one 

    return (
        <div>
            <ProductForm fetchProducts={fetchProducts}/>
            <hr />
            {loaded && <ProductList products={products} />}
        </div>
    );
};

export default Main;
