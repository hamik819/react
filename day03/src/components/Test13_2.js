import React, { useRef, useState } from 'react';

const Test13 = () => {
  const idRef = useRef(null)

  const [ form, setForm ] = useState({
    id:'',
    pw:'',
    email:''
  })
  // form.id, form.pw, form.eamil
  // form['id'], form['pw'], form['email']

  const changeInput1 = (e) => {
    const { value } = e.target
    setForm({
      ...form,
      id: value
    })
  }
  const changeInput2 = (e) => {
    const { value } = e.target
    setForm({
      ...form,
      pw: value
    })
   
  }
  const changeInput3 = (e) => {
    const { value } = e.target
    setForm({
      ...form,
      email: value
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
      <input type="text" value={form.id} onChange={changeInput1} ref={idRef}/>
      <input type="text" value={form.pw} onChange={changeInput2}/>
      <input type="text" value={form.email} onChange={changeInput3}/>
      <button onClick={ onReset }>초기화</button>
      <h3>
        id: { form.id } /
        pw: { form.pw } /
        email: {form.email }/
      </h3>
    </div>
  );
};

export default Test13;