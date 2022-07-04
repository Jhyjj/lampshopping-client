import React,{useState} from 'react';
import {Form, Divider, Input, Button, InputNumber, Upload} from 'antd';
import 'antd/dist/antd.css';
import './upload.scss';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/contansts';




const UploadPage = (props) => {
    const navigate = useNavigate();

     //이미지 경로 상태관리하기 추가
     const [imgsrc, setImgsrc] = useState(null);
     //이미지 처리 함수
     const onChangeImage = (info)=>{
        //파일이 업로드 중일때
        if(info.file.status === 'uploading'){
            return;
        }
        //파일이 업로드 완료 되었을때
        if(info.file.status ==='done'){
            const response = info.file.response;
            const imgsrc = response.imgsrc;
            //받은 이미지 경로를 imgsrc에 넣어줌
            setImgsrc(imgsrc);
        }
     }
     const onSubmit = (values) =>{
        //서버로 데이터 전송하기
        axios.post(`${API_URL}/products`,{
            name:values.name,
            seller:values.seller,
            price:values.price,
            imgsrc:imgsrc,
            desc:values.desc
        }).then((result)=>{
            console.log(result)
            navigate("/"); //php의 redirection이라고 보면 됨(useNavigater)
        })
        .catch(e=>{
            console.log(e);
        })
     }
    return (
       

        <div id="upload-container" className='inner'>
           
            <Form name='productUpload' onFinish={(onSubmit)}>
                <Form.Item name="imgUpload" label={<div className='upload-label'>상품사진</div>}>
                    <Upload name='image' action={`${API_URL}/image`} listType="picture" showUploadList={false} onChange={onChangeImage}>

                        {/* 업로드 이미지가 있으면 이미지를 나타내고, 없으면 회색 배경에 업로드 아이콘이 나타나도록 설정 */}
                        {imgsrc ? <img src={imgsrc} alt="" width="200px" height="200px"/> :
                        (<div id="upload-img-placeholder">
                            <img src="images/icons/camera.png" alt=''/>
                            <span>이미지를 업로드해주세요</span>
                        </div>) 
                        }
                    
                    </Upload>   
                </Form.Item>
                <Divider/>
                <Form.Item name="seller" label={<div className='upload-label'>판매자명</div>}>
                    <Input className='nameUpload' size="large" placeholder='판매자 이름을 입력하세요'/>
                </Form.Item>
                <Divider/>
                <Form.Item name="name" label={<div className='upload-label'>상품이름</div>}>
                    <Input className='upload-name' size='large' placeholder='상품이름을 입력해주세요'/>
                </Form.Item>
                <Divider/>
                <Form.Item name="price" label={<div className='upload-label'>상품가격</div>}>
                    <InputNumber defaultValue={0} size="large"/>
                </Form.Item>
                <Divider/>
                <Form.Item name="desc" label={<div className='upload-label'>상품소개</div>}>
                    <Input.TextArea size='large' id='product-description' maxLength={300} placeholder="상품소개를 적어주세요"/>
                </Form.Item>
                <Form.Item>
                    <Button id="submit-button" size='large' htmlType='submit'>
                        상품등록하기
                    </Button>
                </Form.Item>
            </Form>

        </div>
    );
};

export default UploadPage;