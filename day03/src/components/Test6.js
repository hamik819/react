import React, { useState } from 'react';

const Test6 = () => {
  const [color, setColor] = useState('skyblue')
  const [text, setText] = useState('')

  const changeColor = (e) => {
    const { value } = e.target
    setText( value )
  }

  const onShow = () => {
    setColor( text )
  }
  return (
    <div>
      <h1 style={{fontSize:50, color:color}}>
        컬러 변경
      </h1>
      <select name="" id="" onChange={ changeColor }>
        <option value="skyblue">skyblue</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
        <option value="pink">pink</option>
        <option value="hotpink">hotpink</option>
      </select>
      <button onClick={ onShow }>변경</button>
    </div>
  );
};

export default Test6;