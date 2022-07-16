import React, { useRef, useState } from 'react';

const Test2 = () => {
  const [ userid, setUserid ] = useState('')
  const [ userpw, setUserpw ] = useState('')
  const idRef = useRef()

  const changeInput1 = (e) => {
    // 구조분해 비구조할당
    const { value } = e.target
    setUserid( value )
    // setUserid( e.target.value )
  }

  const changeInput2 = (e) => {
    const { value } = e.target
    setUserpw( value )
    // setUserpw( e.target.value )
  }

  const onReset = () => {
    setUserid('')
    setUserpw('')
    idRef.current.focus()
  }

  return (
    <div>
      <input type="text" value={userid} onChange={ changeInput1 } ref={ idRef }/>
      <input type="text" value={userpw} onChange={ changeInput2 }/>
      <button onClick={ onReset }>초기화</button>
      <hr />
      <h3>
        id: {userid} / pw: {userpw}
      </h3>
    </div>
  );
};

export default Test2;