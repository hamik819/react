import React, { useState } from 'react';
const Test7 = () => {

  const [name, setName] = useState('d')
  const [age, setAge] = useState(0)
  const [color, setColor] = useState('pink')
  const onName1 = () => {
    setName('김태리')
  }
  const onName2 = () => {
    setName('kimdami')
  }
  const onName3 = () => {
    setName('choi')
  }
  const onColor1 = () => {
    setColor('hotpink')
  }
  const onColor2 = () => {
    setColor('orange')
  }
  const onColor3 = () => {
    setColor('tomato')
  }
  return (
    <div>
      <h2> useState </h2>
      <h3 style={{backgroundColor:color, padding:20}}>
        이름 : {name} / 
        나이 : {age}살 /
        컬러 : {color} /
      </h3>
      <p>
        <button onClick={ onName1 }>김태리</button>
        <button onClick={ onName2 }>김다미</button>
        <button onClick={ onName3 }>최우식</button>
      </p>
      <p>
        <button onClick={ onColor1 }>hotpink</button>
        <button onClick={ onColor2 }>orange</button>
        <button onClick={ onColor3 }>tomato</button>
      </p>
      <p>
        <button onClick={ () => {
          setAge(22)
        }}>22살</button>
        <button onClick={ () => setAge(25)}>25살</button>
        <button onClick={ () => setAge(28)}>28살</button>
      </p>
    </div>
  );
};

export default Test7;

/* 
  state

  state는 리액트에서는 화면을 그려내는데 중요한 역할을 한다.
  렌더링이 될 때마다 화면에 새롭게 그려내는 방식

  내부의 것들을 기억하지 못하고 유지하지 못한다
  새롭게 만든다. 함수, 변수 등등
  다시 생성 초기화
  
  값을 유지하기 위해서 hook 등장 - useXXXX
  내부의 것들을 유지

  값을 유동으로 변경할 경우
  useState

  const [ state, setter ] = useState()
  const [ 상태데이터, 상태값을변경하기위한함수 ] = useState()
  const [ 변수, 함수 ] = useState()
  const [ 상태데이터, setter함수 ] = useState(초기값)
  초기값 : 숫자, 문자, 논리, 배열, 객체 등등

  const [ abc, ddd ] = useState(1)
  abc = 1
  ddd(10) => abc값이 10으로 변경

  ddd(값)
  ddd(수식)
  const [ 영희, 철수 ] = useState(초기값)
  
  암묵적인 약속
  const [ count, setCount ] = useState(초기값)
  const [ state, setState ] = useState(초기값)
  const [ 상태변수, set상태변수함수명 ] = useState(초기값)
*/