import React from 'react';
import { useState, useEffect } from 'react';

const Test5 = () => {
    const [ count, setCount ] = useState(1)

    // 화면에 그려진 후 한번만 - ,[] 쓰면!
    useEffect( () => {
        console.log('useEffect');
        const timer = setInterval( () => {
            // setCount( count + 1 )
            // setCount( 매개변수 => 매개변수 + 1 ) 로 작성해야함
            // setCount( 이전값 => 이전값 + 1 )
            setCount( cnt => cnt + 1)
        }, 1000 )
        
        // 자식컴포넌트로 처리할 경우에는 뒷정리 해야 한다.
        return () => {
            clearInterval( timer )
        }
    }, [] )

    return (
        <div>
            <h1>카운트: {count} </h1>
            <p>1초마다 1씩 증가하기</p>
        </div>
    );
};

export default Test5;