import React,{ useState, useEffect} from 'react';
import axios from 'axios';


const ProductList = (props) => {


    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then(result=>{
            const products = result.data.products; //객체의 키로 접근
            console.log(result.data.products);
            setProducts(products);
            console.log(products);
        }).catch(e=>{
            console.log(e);
        })
    },[])
    
    console.log(products);

    return (
        <div id="product-items">
        {products.map(product=>(
            <div className='product-card'>
                <div className='product-img'>
                    <img src={product.imgsrc} alt=''/>
                </div>
                <div className='product-contents'>
                    <span className='product-name'>{product.name}</span>
                    <span className='product-price'>{product.price}</span>
                    <div className='product-seller'>
                        <img src="images/icons/avatar.png" alt=""/>{product.seller}
                    </div>
                </div>
        </div>

        ))}
        
    </div>
    );
};

export default ProductList;