import React from 'react';
import './index.scss';
// import axios from 'axios';
// import ProductList from '../components/ProductList';
import MainProduct from './MainProduct';
// import ProductsCustomHook from '../components/ProductsCustomHook';
import useAsync from '../customhook/useAsynct';
import axios from 'axios';
import {API_URL} from '../config/contansts';
import { Carousel } from 'antd';

//
async function getProducts(){
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
}

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    position: 'absolute',
    bottom : '50px'
  };


const MainPage = (props) => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    // const [products, setProducts] = useState([]);
    //밑에 이거대신 커스텀 훅으로 연결하기~~~
    // useEffect(()=>{
    //     axios.get("http://localhost:3000/products")
    //     .then(result=>{
    //         const products = result.data //객체의 키로 접근
    //         // console.log(result.data.products);
    //         setProducts(products);
    //         console.log(products);
    //     }).catch(e=>{
    //         console.log(e);
    //     })
    // },[])
    // if(products===[]) return <div>로딩중입니다..</div>
    const [state] = useAsync(getProducts,[]);
    const {loading, data, error} = state;
    if(loading) return <div>로딩중</div>
    if(error) return <div>에러발생</div>
    if(!data) return null;
    return (
        <div>
            

            <div id="main">
                <div id="banner">
                    <Carousel autoplay afterChange={onChange}>
                        <div>
                        <img src="images/banners/banner1.png" alt=""/>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                        <img src="images/banners/banner1.png" alt=""/>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                        <img src="images/banners/banner1.png" alt=""/>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                    </Carousel>
                </div>
                
                <div id="product-list" className='inner'>
                    <h2>멍멍이조명의 최신상품을 만나보세요🐾</h2>
                    <div id="product-items">
                        {data.map(product=><MainProduct key={product.id} product={product}/>)}
                        {/* <ProductsCustomHook/> */}
                        {/* 커스텀 훅으로 대신하기~~~ */}
                        {/* {products.map(product=><MainProduct key={product.id} product={product}/>
                        )} */}
                        
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default MainPage;