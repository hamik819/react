import React, { useState } from 'react';

const Test8 = () => {
  const [bgcolor, setBgcolor] = useState('hotpink')
  const changeColor = () => {
    // setBgcolor('tomato')
    setBgcolor( bgcolor === 'hotpink' ? 'tomato' : 'hotpink' )
  }
    return (
    <>
      <h3> div를 클릭하면 hotpink - tomato 왕복</h3>
      <div style={{margin:10, padding:40, fontSize:25, backgroundColor:bgcolor, cursor:'pointer', borderRadius:25}} onClick={ changeColor }>
        backgroundColor : {bgcolor}
      </div>
    </>
  );
};

export default Test8;