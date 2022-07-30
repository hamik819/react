import React from 'react';
import { useState, useRef, useEffect } from 'react';

const Test3 = () => {
    const [text, setText] = useState('')
    const ref1 = useRef()

    // 렌더링 될 때마다 실행된다 - 비효율
    // useEffect( () => {
    //     console.log('useEffect');
    //     ref1.current.focus()
    // })

    // 한번만 실행
    useEffect( () => {
        console.log('useEffect');
        ref1.current.focus()
    }, [] )

    return (
        <div>
            <h2> useEffect 형식2</h2>
            <input type="text" value={text} onChange={ e => setText( e.target.value )} ref={ref1} />
        </div>
    );
};

export default Test3;