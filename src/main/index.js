import React,{useState, useEffect} from 'react';
import './index.scss';
import axios from 'axios';
import ProductList from '../components/ProductList';
import MainProduct from './MainProduct';

const MainPage = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then(result=>{
            const products = result.data //객체의 키로 접근
            // console.log(result.data.products);
            setProducts(products);
            console.log(products);
        }).catch(e=>{
            console.log(e);
        })
    },[])
    if(products===[]) return <div>로딩중입니다..</div>
    return (
        <div>
            

            <div id="main">
                <div id="banner">
                    <img src="images/banners/banner1.png" alt=""/>
                </div>
                <div id="product-list" className='inner'>
                    <h2>멍멍이조명의 최신상품을 만나보세요🐾</h2>
                    <div id="product-items">
                        {products.map(product=><MainProduct key={product.id} product={product}/>
                        )}
                        
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default MainPage;