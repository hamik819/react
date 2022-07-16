import React, { useRef, useState } from 'react';

const Test13 = () => {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [email, setEmail] = useState('')
  const idRef = useRef(null)

  const changeInput1 = (e) => {
    const { value } = e.target
    setId( value )
  }
  const changeInput2 = (e) => {
    const { value } = e.target
    setPw( value )
  }
  const changeInput3 = (e) => {
    const { value } = e.target
    setEmail( value )
  }
  const onReset = () => {
    setId('')
    setPw('')
    setEmail('')
    idRef.current.focus()
  }
  return (
    <div>
      <input type="text" value={id} onChange={changeInput1} ref={idRef}/>
      <input type="text" value={pw} onChange={changeInput2}/>
      <input type="text" value={email} onChange={changeInput3}/>
      <button onClick={ onReset }>초기화</button>
    </div>
  );
};

export default Test13;