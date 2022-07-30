import React from 'react';
import Test4Sub from './Test4Sub';
import { useState } from 'react';

// 형식4
const Test4 = () => {
    const [isShow, setIsShow] = useState(false)
    const onToggle = () => {
        setIsShow( !isShow )
    }
    return (
        <div>
            <p>
                <button onClick={onToggle}> 
                {
                    isShow ? '숨기기' : '보이기'
                }
                </button>
            </p>
            <hr />
            {
                isShow && <Test4Sub />
            }
        </div>
    );
};

export default Test4;