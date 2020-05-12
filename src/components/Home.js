import React, { useContext } from 'react';
import {ProductContext} from '../provider/Provider'
import Product from './Product'

const Home = () => {
    
    const [products, setProducts] = useContext(ProductContext);
    console.log(products);
    
    return (
        <div>
            {products.map(product => (
                <Product product={product} key={product.id}/>
            ))}
            <button onClick={() => setProducts([{id: 4, name: 'hey', price: 20.99}])}>Change products</button>
        </div>
        
    )

}

export default Home;