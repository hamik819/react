import React, { useState } from 'react';

const Test8 = () => {
  const [ isChk, setIsChk ] = useState(false)

  const onChk = (e) => {
    const {checked} = e.target
    setIsChk( checked )
  }
  return (
    <div style={{margin:30}}>
      <p>
        <input type="checkbox" checked={ isChk } onChange={ onChk }/>
        { isChk ? '숨기기' : '보이기'}
      </p>
      {
        isChk ? <div style={{width:300, height:70, background:'pink', marginBottom:20}}></div> : null
      }
      {
        isChk && <div style={{width:300, height:70, background:'hotpink', marginBottom:20}}></div>
      }
    </div>
  );
};

export default Test8;