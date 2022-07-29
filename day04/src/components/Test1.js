import React from 'react';
// src안의 이미지를 가지고 올 경우
// import 참조변수 from '이미지경로'
import m0 from '../assets/img/m0.jpg'
import m1 from '../assets/img/m1.jpg'

const Test1 = () => {
    return (
        <div>
            <img src={m0} alt="" />
            <img src={m1} alt="" />
            <hr />
            {/*  public안의 이미지를 사용할 경우 */}
            <img src="./images/cat0.jpg" alt="" />
        </div>
    );
};

export default Test1;