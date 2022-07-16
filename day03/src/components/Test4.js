import React, { useRef } from 'react';

const Test4 = () => {

  const idRef = useRef(null)
  const pwRef = useRef(null)

  const onShow = () => {
    const data = {
      id : idRef.current.value,
      pw : pwRef.current.value
    }
    console.log( data );
  }

  return (
    <div>
      {/* 수업용 : 사용하는 사람들도 있다 */}
      <input type="text"  ref={idRef}/>
      <input type="text" ref={pwRef}/>
      <button onClick={ onShow }>확인</button>
      <p></p>
    </div>
  );
};

export default Test4;