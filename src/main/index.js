import React from 'react';
import './index.scss';

const MainPage = (props) => {
    return (
        <div>
            

            <div id="main">
                <div id="banner">
                    <img src="images/banners/banner1.png" alt=""/>
                </div>
                <div id="product-list" className='inner'>
                    <h2>멍멍이조명의 최신상품을 만나보세요🐾</h2>
                    <div id="product-items">
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
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default MainPage;