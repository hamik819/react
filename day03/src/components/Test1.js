import React from 'react';

const Test1 = () => {

  //event, evt, e
  const onTest = (e) => {
    // 실제로 가리킨 대상
    console.log(e.target);
    // 이벤트가 있는 대상
    console.log(e.currentTarget);
  }

  return (
    <div>
      <button onClick={ onTest }>
        <span>안녕하세요 저는 홍길동입니다.</span>
        <br />
        <b>여기를 누르세요</b>
      </button>
    </div>
  );
};

export default Test1;