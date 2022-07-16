import React, { useState } from 'react';
import './Test10.css'
import Test10Modal from './Test10Modal';

const Test10 = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  
  const onOpen = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <button onClick={ onOpen }>팝업 띄우기</button>
      {
        isOpen && <Test10Modal onClose={onClose}/>
      }
    </div>
  );
};

export default Test10;