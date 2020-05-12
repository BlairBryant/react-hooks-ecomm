import React, {useState} from 'react';
import startingProducts from '../mockedData/starting-products.json'

const ProductContext = React.createContext([{}, () => {}]);
// export const productConsumer = ProductContext.Consumer;

const ProductProvider = (props) => {
    const [state, setState] = useState(startingProducts)

    console.log(state);
    
    return (
        <ProductContext.Provider value={[state, setState]}>
            {props.children}
        </ProductContext.Provider>
    )
}

export {ProductContext, ProductProvider}