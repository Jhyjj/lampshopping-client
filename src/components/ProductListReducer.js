import React,{useReducer, useEffect} from 'react';
import axios from 'axios';

//useReducer사용하려면 먼저 초기값 설정해줘야함
const initialState = {
    loading:false,
    data:null,
    error:null
}

//reducer함수도 만들어줘야함
function reducer(state,action){
    switch(action.type){
        case 'LOADING':
            return{
                loading:true,
                data:null,
                error:null
            }
        case 'SUCCESS':
            return{
                loading:false,
                data:action.data,
                error:null
            }
        case 'ERROR':
            return{
                loading:false,
                data:null,
                error:action.error
            }
        default:
            return state;
    }
}


const ProductListReducer = (props) => {
    const fetchProductList = async()=>{
        dispatch({type:'LOADING'});
        try{ const res = axios.get("http://localhost:3000/products");
             dispatch({type:'SUCESS',data:res.data})
        }
        catch(e){
            dispatch({type:'ERROR',error:e});
        }
    }
    useEffect(()=>{fetchProductList()},[]);
    console.log(data);
    const [state,dispatch] = useReducer(reducer,initialState);
    const {loading,error,data} = state;
    
    if(loading) return <div>로딩중</div>
    if(error) return <div>에러발생</div>
    if(!data) return null

    return (
        <div>
        </div>
    );
};

export default ProductListReducer;