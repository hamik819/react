import React, { useState } from 'react';
import Test9Sub from './Test9Sub';

const Test9 = () => {
    const [ msg, setMsg ] = useState('출력')
    const [ isShow, setIsShow ] = useState(false)
    const onMsg1 = () => {
        const result = window.confirm('전부 삭제 하시겠습니까?')
        if( result ) {
            setMsg('전부 삭제해 주세요')
            setIsShow(true)
        } else {
            return
        }
    }
    const onMsg2 = () => {
        const result = window.confirm('전부 복구 하시겠습니까?')
        if( result ) {
            setMsg('전부 복구해 주세요')
            setIsShow(true)
        } else {
            return
        }
    }
    return (
        <div>
            <button onClick={ onMsg1 }>메시지1</button>
            <button onClick={ onMsg2 }>메시지2</button>
            <Test9Sub msg={msg} isShow={isShow} setIsShow={setIsShow}/>
        </div>
    );
};

export default Test9;