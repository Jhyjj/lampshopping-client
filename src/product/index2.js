import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import useAsync from '../components/useAsync';

//커스텀 훅을 사용해서 상품 상세페이지 불러오기~~~
//만들어놓은 useAsync를 사용할것임.

//비동기 함수 만들기 -> 여기서 서버에서 데이터를 받아올 것임.
//비동기 함수사용할때 꼭 await을 달아주자~~~ 안넣으면 해당 자료를 불러오기 전에 실행되버림
async function getDetail(id){
    const res = await axios.get(`http://localhost:3000/product/${id}`);
    console.log(res, res.data);
    return res.data;
}

const DetailViewCustomHook = ()=>{
    //useParams로 해당 아이디를 받아서 getDetail함수 실행
    const {id} = useParams();
    const [state] = useAsync(()=>getDetail(id),[]);
    const {loading, data, error} = state;
    if(loading) return <div>로딩중~~~~</div>
    if(error) return <div>에러</div>
    if(!data) return null
    return(
    <div className='inner'>
        <div id="img-box">
            <img src={data.imgsrc} alt=''/>
        </div>
        <div id="profile-box">
            <ul>
                <li>
                    <div>
                        <img src="/images/icons/avatar.png" alt=""/>
                        <span>{data.seller}</span>
                    </div>
                </li>
                <li>
                상품명: {data.name}
                </li>
                <li>
                    가격 :{data.price}
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

    )
}

export default DetailViewCustomHook;