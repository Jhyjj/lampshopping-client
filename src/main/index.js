import React,{useState, useEffect} from 'react';
import './index.scss';
import axios from 'axios';
import ProductList from '../components/ProductList';

const MainPage = (props) => {
    // const [products, setProducts] = useState([]);
    // useEffect(()=>{
    //     axios.get("http://localhost:3000/products")
    //     .then(result=>{
    //         const products = result.data.products; //객체의 키로 접근
    //         console.log(result.data.products);
    //         setProducts(products);
    //         console.log(products);
    //     }).catch(e=>{
    //         console.log(e);
    //     })
    // },[])
    return (
        <div>
            

            <div id="main">
                <div id="banner">
                    <img src="images/banners/banner1.png" alt=""/>
                </div>
                <div id="product-list" className='inner'>
                    <h2>멍멍이조명의 최신상품을 만나보세요🐾</h2>
                    <ProductList/>
                    {/* <div id="product-items">
                        <div className='product-card'>
                            <div className='product-img'>
                                <img src="images/products/product1.jpg" alt=''/>
                            </div>
                            <div className='product-contents'>
                                <span className='product-name'>제품명</span>
                                <span className='product-price'>가격</span>
                                <div className='product-seller'>
                                    <img src="images/icons/avatar.png" alt=""/>김멍멍
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            
        </div>
    );
};

export default MainPage;