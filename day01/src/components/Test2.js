import React from 'react';

const Test2 = () => {
    const title = '신상명세서'
    const name = '홍길동'
    const age = 20
    const addr = '서울'

    return (
        <>
            <h2> {title} </h2>
            <ul>
                <li>이름: {name} </li>
                <li>나이: {age} </li>
                <li>주소: {addr} </li>
            </ul>
        </>
    );
};

export default Test2;