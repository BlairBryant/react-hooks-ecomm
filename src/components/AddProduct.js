import React, {useContext, useState} from 'react';
import {ProductContext} from '../provider/Provider'

const AddProduct = () => {
    
    const [products, setProducts] = useContext(ProductContext);
    // const [currentId, setId] = useContext(ProductContext);
    const [inputs, setInputs] = useState({});

    const handleChange = (event, key) => {
        setInputs({...inputs, [key]: event.target.value})
    }

    const submitForm = (event) => {
        event.preventDefault()
        // setTheInputs()
        setInputs({...inputs, id: 7})

        console.log(inputs);

        setProducts([...products, inputs])
        
    }

    const setTheInputs = () => {
        setInputs({...inputs, id: 7})
    }

    return (
        <div>
            <h1>Add a Product</h1>
            <form onSubmit={submitForm}>
                <label for="name">Product Name</label>
                <input name="name" onChange={(e) => handleChange(e, 'name')}/>
                <label for="price">Price</label>
                <input name="price" onChange={(e) => handleChange(e, 'price')}/>
                <br/>
                <button type="submit">Add</button>
            </form>
        </div>
    )

}

export default AddProduct;