import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <div id="header">
                <div className='inner'>
                    <h1><NavLink to="/">멍멍이조명</NavLink></h1>
                    <ul>
                        <li><NavLink to="/upload">상품등록하기</NavLink></li>
                        <li><NavLink to="/products">상품보기</NavLink></li>
                    </ul>
                </div>
            </div>
    );
};

export default Header;