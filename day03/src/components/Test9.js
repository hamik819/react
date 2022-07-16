import React, { useState } from 'react';

const Test9 = () => {
  const [ id, setId ] = useState('')
  const [ pw, setPw ] = useState('')

  const changeInput1 = (e) => {
    const { value } = e.target
    setId( value )
  }
  const changeInput2 = (e) => {
    const { value } = e.target
    setPw( value )
  }

  return (
    <div>
      <input type="text" value={id} onChange={changeInput1}/>
      <input type="password" value={pw} onChange={changeInput2}/>
      <button disabled={ pw.length < 7 }>로그인 합니다.</button>
      {/* {
        pw.length > 6 ? <button>로그인 합니다.</button> : <button disabled>로그인 합니다.</button>
      } */}
    </div>
  );
};

export default Test9;