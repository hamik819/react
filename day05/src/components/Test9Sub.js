import React, { useEffect } from 'react';

const Test9Sub = ({ msg, isShow, setIsShow }) => {
    // 3초 후에 한번만 사라지기
    useEffect( () => {
        const timer = setTimeout( () => {
            setIsShow(false)
        }, 3000)
        return() => {
            clearTimeout(timer)
        }
    }, [isShow] )
    return (
        <>
            {
                isShow && <div style={{backgroundColor:'skyblue', padding:'20px 30px', margin:20, fontSize:25}}>
                메시지 : {msg}
                </div>
            }
            <p>3초 후에 사라지기</p>
        </>
    );
};

export default Test9Sub;