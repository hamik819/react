const Sub = ( { name,age } ) => {
  //비구조할당
  // const { name, age } = props

  return (
    <div>
      <h2> 자식 컴포넌트 </h2>
      <h3>이름: {name} / ({typeof name})</h3>
      <h3>나이: {age} / ({typeof age})</h3>
      <hr />
    </div>
  );
};

/* const Sub = ( props ) => {
  // props = { name: xxx, age:xx }
  return (
    <div>
      <h2> 자식 컴포넌트 </h2>
      <h3>이름: {props.name} / ({typeof props.name})</h3>
      <h3>나이: {props.age} / ({typeof props.age})</h3>
      <hr />
    </div>
  );
}; */

const Test3 = () => {
  const dog = { name: '강아지', age: 3 }
  const cat = { name: '고양이', age: 2 }
  return (
    <>
      <h2> props 정리 </h2>
      <Sub name="유재석" age="20" />
      <Sub name="김다미" age={22}/>
      <Sub name={dog.name} age={dog.age}/>
      <Sub name={cat.name} age={cat.age}/>
      <Sub { ...dog }/>
      <Sub { ...cat }/>
      {/* 
        부모에서 자식컴포넌트에 값을 전달할 때
        자식이 부모에서 값을 받아올 때
        자식에 부모에 값을 콜백으로 전달할 때

        props는 객체형 - 속성을 키로 인식한다.

        <자식컴포넌트 props = 전달값 />
        전달값 : 숫자, 문자, 논리값
                  "문자", {숫자}, {논리값}
                 ** state, setState, function 등을 전달
                 { state, setState, function }

        props명은 일반적으로 변수처럼 생각하자!
        전달하는 값을 담는 변수(처럼 생각) - 한글, 영문자 숫자 가능
      */}
    </>
  );
};

export default Test3;