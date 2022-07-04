import { useReducer, useEffect } from "react";

const initialState = {
    loading : false,
    data : null,
    error : null
}

//로딩중, 데이터 받기 성공, 데이터 받기 실패
//Loading, success, error
function reducer(state,action){
    switch(action.type){
        case "LOADING":
            return {
                loading : true,
                data : null,
                error : null
            };
        case "SUCCESS":
            return {
                loading : false,
                data : action.data,
                error : null
            };
        case "ERROR" :
            return {
                loading : false,
                data : null,
                error : action.error
            };
        default:
            return state;
    }
}

function useAsync(callback,deps=[]){
    const [state, dispatch] = useReducer(reducer,initialState);
    const fetchData = async ()=> {
        dispatch({type:"LOADING"});
        try{
            const data = await callback();
            dispatch({
                type: "SUCCESS",
                data : data
            })
        }
        catch(e){
            dispatch({
                type: "ERROR",
                error : e
            })
        }
    }
    useEffect(()=>{
        fetchData();
        //eslint-disable-next-line
    },deps);
    
    return [state, fetchData];
}

export default useAsync;