import React, { useState } from 'react';

const Test9 = () => {
  const [ isShow, setIsshow ] = useState(false)
  const onShow = () => {
    setIsshow(true)
  }
  const onHide = () => {
    setIsshow(false)
  }
  const onToggle = () => {
    setIsshow( !isShow)
  }
  return (
    <>
      <p>
        <button onClick={ onShow }>보이기</button>
        <button onClick={ onHide }>숨기기</button>
        <button onClick={ onToggle } style={{backgroundColor:'hotpink', border:'none', borderRadius:5, marginLeft:20, cursor:'pointer', fontWeight:'bold', padding:5}}>
          {
            isShow ? '숨기기' : '보이기'
          }
        </button>
      </p>
      <hr />
      {
        isShow === true ? <div style={{width:300, height:100, marginTop:20, backgroundColor:'hotpink'}}></div>
        :
        null
      }
      {
        isShow && <div style={{width:300, height:100, marginTop:20, backgroundColor:'hotpink'}}></div>
      }
      {/* <div style={{width:300, height:100, marginTop:20, backgroundColor:'hotpink'}}></div> */}
    </>
  );
};

export default Test9;