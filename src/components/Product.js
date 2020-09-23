import React from 'react';
import { Link } from 'react-router-dom'

const Product = (props) => {
    const { product } = props


    return (
        <Link to={`/product/${product.id}`}>
            <div className="product">
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
            </div>
            {/* <img src={require(product.pic)} alt="errorme"/> */}
        </Link>
    )

}

export default Product;