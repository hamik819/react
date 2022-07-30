import React from 'react';
import { useState, useEffect } from 'react';

const Test7 = () => {
    const [ count, setCount ] = useState(0)
    const [ isActive, setIsActive ] = useState(false)
    
    useEffect( () => {
        let timer = null
        
        if( isActive ) {
            timer = setInterval( () => {
                setCount( prev => prev + 1 )
            }, 1000 )
        } else {
            clearInterval( timer )
        }

        return() => {
            clearInterval( timer )
        }
    },[ isActive ] )

    const onToggle = () => {
        setIsActive( !isActive )
    }
    const onReset = () => {
        setCount(0)
        setIsActive(false)
    }
    return (
        <div>
            <h1>카운트 : {count} </h1>
            <p>
                <button onClick={onToggle}>시작/중지</button>
                <button onClick={onReset}>초기화 중지</button>
            </p>
        </div>
    );
};

export default Test7;