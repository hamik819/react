import React, { useRef } from 'react';

const Test3 = () => {
  const ref1 = useRef(null)
  const ref2 = useRef()

  const onColor = () => {
    ref1.current.style.backgroundColor = 'hotpink'
    ref1.current.style.padding = "20px"
    ref1.current.style.color = '#fff'
  }
  return (
    <div>
      <h3> 수업용 좋은 예는 아니다 </h3>
      <h2 ref={ref1}> useRef 연습 </h2>
      <h2 ref={ref2}> useRef 연습 </h2>
      <button onClick={onColor}>확인</button>
    </div>
  );
};

export default Test3;

/* 
직접 DOM 요소에 접근해야 할 때, useRef 훅을 사용하여 DOM 요소에 직접 접근이 가능

useRef 훅이 반환하는 ref 객체를 이용해서 자식 요소에 접근이 가능

렌더링이 될 때마다 값이 유지가 된다.

선언
const xxx = useRef(null)
const xxx = useRef()
const xxx = useRef(숫자) - 유지

DOM연결
<태그 ref={xxx} />

실행
xxx.current.yyy = ???
xxx.current.style.color = 'red'
xxx.current.style.fontSize = '20px'


useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다. 반환된 객체는 컴포넌트의 전 생애주기를 통해 유지될 것입니다.

Ref를 사용해야 할 때
Ref의 바람직한 사용 사례는 다음과 같습니다.

포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
애니메이션을 직접적으로 실행시킬 때.
서드 파티 DOM 라이브러리를 React와 같이 사용할 때.

Ref를 남용하지 마세요
 */