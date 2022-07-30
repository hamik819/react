import React from 'react';
import { useState, useEffect } from 'react';

// 형식4
const Test4Sub = () => {
    const [ x, setX ] = useState(0)
    const [ y, setY ] = useState(0)

    const onMove = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect( () => {
        console.log('useEffect');
        window.addEventListener('mousemove', onMove)
        // 뒷정리
        return() => {
            console.log('뒷정리')
            window.removeEventListener('mousemove', onMove)
        }
    }, [])
    
    return (
        <div>
            <h2> 마우스 좌표 </h2>
            <div style={{border:'1px solid #000', width:400, padding:30, margin:5, fontSize:30}}>
            x축:{x} / y축:{y}
            </div>
        </div>
    );
};

export default Test4Sub;