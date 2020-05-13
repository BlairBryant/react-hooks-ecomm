import React, {useContext, useState} from 'react';
import {ProductContext} from '../provider/Provider'

const AddProduct = () => {

    const [products, setProducts] = useContext(ProductContext);
    // const [newProduct, setNewProduct] = useState({})
    const [inputs, setInputs] = useState({});
    
    const addProduct = () => {
        
    }

    const handleChange = (event, key) => {
        console.log(event.target.value);
        
        setInputs({...inputs, [key]: event.target.value})
    }

    const submitForm = (event) => {
        if (event) {
            event.preventDefault()
        }
    }

    return (
        <div>
            <h1>Add a Product</h1>
            <form onSubmit={submitForm()}>
                <label for="name">Product Name</label>
                <input name="name" onChange={(e) => handleChange(e, 'name')}/>
                <label for="price">Product Name</label>
                <input name="price" onChange={(e) => handleChange(e, 'price')}/>
                <br/>
                <button type="submit">Add</button>
            </form>
        </div>
    )

}

export default AddProduct;