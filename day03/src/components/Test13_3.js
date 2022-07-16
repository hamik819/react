import React, { useRef, useState } from 'react';

const Test13 = () => {
  const idRef = useRef(null)

  const [ form, setForm ] = useState({
    id:'',
    pw:'',
    email:''
  })

  // 구조분해
  const { id, pw, email } = form
  const changeInput1 = (e) => {
    const { value, name } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }
  const changeInput2 = (e) => {
    const { value, name } = e.target
    setForm({
      ...form,
      [name]: value
    })
   
  }
  const changeInput3 = (e) => {
    const { value, name } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }
  const onReset = () => {
   setForm({
    id:'',
    pw:'',
    email:''
   })
  }
  return (
    <div>
      <input type="text" value={id} name="id" onChange={changeInput1} ref={idRef}/>
      <input type="text" value={pw} name="pw" onChange={changeInput2}/>
      <input type="text" value={email} name="email" onChange={changeInput3}/>
      <button onClick={ onReset }>초기화</button>
      <h3>
        id: { id } /
        pw: { pw } /
        email: { email }/
      </h3>
    </div>
  );
};

export default Test13;