import React from 'react';
import "./product.scss";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useAsync from '../customhook/useAsynct';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/contansts';



async function getProduct(id){
    const response = axios.get(`${API_URL}/product/${id}`);
    return (await response).data;
}

const ProductPage = () => {
    const navigate = useNavigate();
    // const [product, setProduct] = useState(null);

    // //useParams()를 실행시키면 파라미터 값을 가지고 있는 객체를 반환해줌.
    const { id } = useParams();
    console.log(id);
    const [state]= useAsync(()=>getProduct(id),[id]);
    const {loading,data:product,error} = state;
    const productDel =()=>{
        axios.delete(`${API_URL}/product/${id}`)
        .then(result=>{
            console.log('삭제되었습니다.');
            navigate("/");
        })
        .catch(e=>{
            console.log(e);
        })
    }
    if(loading) return <div>로~딩~중</div>
    if(error) return <div>에러</div>
    
    //useEffect 사용할때 두번째 인자에 빈배열을 넣어주면 한번만 실행됨.
    // useEffect(()=>{
    //     axios.get(`http://localhost:3000/product/${id}`)
    //     .then(result=>{
    //         const data = result.data;
    //         console.log(data);
    //         setProduct(data);
    //     })
    //     .catch(e=>{
    //         console.log(e);
    //     })
    // },[]);
    
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
                       상품설명
                    </li>
                    <li>
                        {product.desc}
                    </li>
                </ul>
            </div>
            <div>
                <span onClick={productDel}>삭제하기</span>
            </div>
        </div>
    );
};

export default ProductPage;
