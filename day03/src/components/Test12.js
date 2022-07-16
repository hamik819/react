import Test12Ani from "./Test12Ani";
import Test12Na from "./Test12Na";
import Test12Dis from './Test12Dis';
import { useState } from "react";

const Test12 = () => {
  const [ name, setName ] = useState('아무개')
  const [ ani, setAni ] = useState('고양이')
  const changeInput1 = (e) => {
    const { value } = e.target
    setName( value )
  }
  const changeInput2 = (e) => {
    const { value } = e.target
    setAni( value )
  }
  return (
    <div>
      <Test12Na name={name} changeInput1={changeInput1}/>
      <hr />
      <Test12Ani ani={ani} changeInput2={changeInput2}/>
      <hr />
      <Test12Dis name={name} ani={ani}/>
    </div>
  );
};

export default Test12;