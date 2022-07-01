import React,{useState, useEffect} from 'react';
import "./product.scss";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const [product, setProduct] = useState(null);

    //useParams()를 실행시키면 파라미터 값을 가지고 있는 객체를 반환해줌.
    const { id } = useParams();
    console.log(id);
    //useEffect 사용할때 두번째 인자에 빈배열을 넣어주면 한번만 실행됨.
    useEffect(()=>{
        axios.get(`http://localhost:3000/product/${id}`)
        .then(result=>{
            const data = result.data;
            console.log(data);
            setProduct(data);
        })
        .catch(e=>{
            console.log(e);
        })
    },[]);
    if(!product) return <div>~로딩중~</div>;
    return (
        <div className='inner'>
            <div id="img-box">
                <img src={product.imgsrc} alt=''/>
            </div>
            <div id="profile-box">
                <ul>
                    <li>
                        <div>
                            <img src="/images/icons/avatar.png" alt=""/>
                            <span>{product.seller}</span>
                        </div>
                    </li>
                    <li>
                       상품명: {product.name}
                    </li>
                    <li>
                        가격 :{product.price}
                    </li>
                    <li>
                       등록일 : 2022. 06. 22
                    </li>
                    <li>
                       상품설명 : 아주 새로운 조명 
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductPage;