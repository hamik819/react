import React from 'react';
// import 참조변수 from './components/파일명.js js는 생략이 가능'
import Test1 from './components/Test1'
import Test2 from './components/Test2'

const App = () => {
  return (
    <>
      <Test2 />
      <hr/>
      <Test1 />
    </>
  );
};

export default App;