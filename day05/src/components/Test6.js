import React from 'react';
import { useState, useEffect } from 'react';

const Test6 = () => {
    const [ text, setText ] = useState(5)
    const [ count, setCount ] = useState(1)

    const changeInput = (e) => {
        const { value } = e.target
        setText( Number(value) )
    }

    useEffect( () => {
        console.log('useEffect');
        const timer = setInterval( () => {
            setCount( prevState => prevState + text )
        }, 1000 )
        
        return() => {
            clearInterval( timer )
        }
    }, [ text ])

    return (
        <div>
            <p>
                숫자간격:
                <input type="text" value={text} onChange={ changeInput } />
            </p>
            <h4>입력한 값만큼 1초마다 증가 : </h4>
            <h2>{count}</h2>
        </div>
    );
};

export default Test6;