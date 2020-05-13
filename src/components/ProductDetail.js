import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../provider/Provider';

const ProductDetail = (props) => {
    const [products, setProducts] = useContext(ProductContext);
    const [product, setProduct] = useState({})
    useEffect(() => {
        getProduct()}
        , [products])
    
    const getProduct = () => {
        const currentProduct = products.filter(product => product.id === +props.match.params.id);
        console.log(props);
        setProduct(currentProduct[0]);
    }

    return (
        <div className="product-detail">
            <button onClick={() => props.history.goBack()}>BACK</button>
            <p>{product.name}</p>
            <p>${product.price}</p>
        </div>
    )

}

export default ProductDetail;