import React, { useState } from 'react';

// Name 안에서만 이루어짐
const Name = () => {
  const [ text, setText ] = useState('')
  const changeInput = (e) => {
    const { value } = e.target
    setText( value )
  }
  return (
    <div>
      <h3>Name 컴포넌트</h3>
      <label>이름 : </label>
      <input type="text" value={ text } onChange={ changeInput }/>
      <span style={{marginLeft:15,color:'red'}}>{ text }</span>
    </div>
  );
};

const Animal = ({ani, changeInput}) => {
  return (
    <div>
      <h3>Animal 컴포넌트</h3>
      <label>동물 : </label>
      <input type="text" value={ani} onChange={changeInput}/>
      <span style={{marginLeft:15,color:'red'}}>{ani}</span>
    </div>
  );
};

const Display = ({ ani }) => {
  return (
    <div>
      <h3>Display 컴포넌트</h3>
      <h1>내가 좋아하는 동물은 {ani} 입니다.</h1>
    </div>
  );
};

// Main - 부모가 데이터 관리
const Test11 = () => {
  const [ ani, setAni ] = useState('고양이')
  const changeInput = (e) => {
    const { value } = e.target
    setAni( value )
  }
  return (
    <div>
      <Name />
      <hr />
      <Animal ani={ani} changeInput={changeInput} />
      <hr />
      <Display ani={ani} />
      <hr />
    </div>
  );
};

export default Test11;