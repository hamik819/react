import React from 'react';

const Test3Sub = ({ onMod , onAdd , onDel }) => {
    return (
        <div>
            <button onClick={ () => onDel(1) }>삭제</button>
            <button onClick={ () => onAdd('송혜교') }>추가</button>
            <button onClick={ () => onMod(2) }>수정</button>
        </div>
    );
};

export default Test3Sub;