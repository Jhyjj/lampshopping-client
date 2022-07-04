import React from 'react';
import axios from 'axios';
import useAsync from './useAsync';
import MainProduct from '../main/MainProduct';


//useAsync를 이용해서 커스텀훅 만들기!
//메인페이지의 상품리스트
//상품리스트를 클릭했을때 상세 페이지


//1. 메인페이지에서 사용할 커스텀훅 만들기

async function getProducts(){
    const res = await axios.get("http://localhost:3000/products");
    console.log(res);
    // const products = res.data;
    return res.data;
}


const ProductsCustomHook = () => {
    const [state] = useAsync(getProducts,[]);
    const {loading, data, error} = state;
    console.log(state);
    if(loading) return <div>로딩중입니당..</div>
    if(error) return <div>상품을 불러오는데 오류가 발생했습니다..</div>
    if(!data) return null;
    return (
        <>
            {data.map(product=><MainProduct key={product.id} product={product}/>)}
        </>
    );
};


export default ProductsCustomHook;

