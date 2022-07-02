import React from 'react';

const Test2 = () => {
    // 함수영역 - 조건문, 제어문 모두 가능
    const title = '신상명세서'
    const name = '홍길동'
    const age = 20
    const addr = '서울'
    const css1 = {
        backgroundColor: 'pink',
        paddng: 10,
        margin: 10
    }
    const css2 = {
        backgroundColor: 'tomato',
        color: 'white',
        width: 300,
        lineHeight: 2
    }

    return (
        <>
            <h2 style={css1}> {title} </h2>
            <ul>
                <li style={{backgroundColor:'yellow'}}>이름: {name} </li>
                <li style={css2}>나이: {age} </li>
                <li>주소: {addr} </li>
            </ul>
        </>
    );
};

export default Test2;