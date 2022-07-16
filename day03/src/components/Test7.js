import React, { useState } from 'react';

const Test7 = () => {
  const [ isChk , setIsChk ] = useState(false)
  const onChk = (e) => {
    const { checked } = e.target
    setIsChk(checked)
    // isChk ? console.log('aaa') : console.log('bbb')
    // console.log(e.target.parentNode);
  }
  return (
    <>
      {/* true/false 컬러, 라인 */}
      <div style={{margin:30, fontSize:20, color: isChk ? 'tomato' : '#333', textDecoration: isChk ? 'line-through' : 'none'}}>
        <input type="checkbox" onChange={ onChk } checked={ isChk }/>
        오늘은 토요일 입니다.
      </div>
    </>
  );
};

export default Test7;