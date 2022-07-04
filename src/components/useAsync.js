import {useReducer, useEffect} from 'react';

//useAsync를 이용해서 커스텀 훅 만들기!


//초기값 설정하기
const initialState = {
    loading : false,
    data : null,
    error : null
}

//리듀서 함수 만들어주기! --> action의 타입에 따라 어떻게 실행할 것인지 switch문으로 작성~~
//이 함수는 useReducer의 첫번째 매개변수에 들어감.. 
//reducer 함수 매개변수 첫번째자리는 상태,
//const [state, dispatch] = useReducer(reducer,initialState)
function reducer(state,action){
    switch(action.type){
        case "LOADING":
            return {
                loading:true,
                data:null,
                error:null
            };
        case "SUCCESS":
            return {
                loading:false,
                data:action.data,
                error:null
            };
        case "ERROR":
            return {
                loading:false,
                data:null,
                error:action.error
            }
        default:
            return state;
    }
}
//useAsync함수 만들기
//첫번째 매개변수: callback함수
//두번째 매개변수: 초기값 
function useAsync(callback, init=[]){
    const [state,dispatch] = useReducer(reducer,initialState);
    const fetchData = async ()=>{
        dispatch({type:"LOADING"});
        //성공하면 try, 실패하면 catch
        try{
            
            const data = await callback();
            
            dispatch({
                type:"SUCCESS",
                data:data
            });
            console.log(state);
        }
        catch(e){
            dispatch({
                type:"ERROR",
                error:e
            })
        }
    }
    useEffect(()=>{fetchData()
    //eslint-disable-next-line
    },init)
    return [state,fetchData];

}


export default useAsync;