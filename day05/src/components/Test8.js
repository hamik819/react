import React from 'react';
import Test8Sub from './Test8Sub';
import { useState } from 'react';

const Test8 = () => {
    const [ isShow, setIsShow ] = useState(false)
    const onToggle = () => {
        setIsShow(!isShow)
    }
    return (
        <div>
            <p>
                <button onClick={onToggle}>{ isShow ? '숨기기' : '보이기' }</button>
            </p>
            <Test8Sub />
            {/* {isShow && <Test8Sub />} */}
        </div>
    );
};

export default Test8;