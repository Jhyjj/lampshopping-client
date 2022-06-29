import React from 'react';

const Footer = (props) => {
    return (
        <div id="footer">
                <div id="footer-info">
                    <div className='inner'>
                        <div>
                            <h3>무통장 입금계좌</h3>
                            <p>BANK ACCOUNT</p>
                            <p>123-123-123-12</p>
                            <p>예금주:김멍멍(멍멍이조명)</p>
                        </div>
                        <div>
                            <h3>고객센터</h3>
                            <p>영업시간 외에는 문의게시판을 이용해주시면 담당자 확인 후 빠른 답변 도와드리겠습니다.</p>
                            <p id="tel">02-123-1234</p>
                        </div>
                        <div>
                            <h3>공지사항</h3>
                            <ul>
                                <li>조명가이드 <span>2022-06-29</span></li>
                                <li>신상품 입고안내 <span>2022-06-29</span></li>
                                <li>회원 2000명 돌파 기념 세일 안내 <span>2022-06-29</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="footer-copy">
                    <div className='inner'>
                        <ul>
                            <li>홈</li>
                            <li>멍멍조명 매장안내</li>
                            <li>이용약관</li>
                            <li>개인정보처리방침</li>
                        </ul>
                    </div>
                    <div id="copyright">
                        <div className='inner'>
                            상호: 멍멍이조명  주소: 울산광역시 남구 삼산동
                            대표전화 : 국번없이 052-123-1234  대표이사: 김멍멍
                            개인정보관리자: 이멍멍 lamp,.LTD all rights reserved.
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Footer;