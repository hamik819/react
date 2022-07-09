const Cat = ( props ) => {
  // props = {name: '고양이'}

  // 비구조할당, 구조분해
  const { name } = props
  return (
    <div>
      <h2>{name} 컴포넌트</h2>
    </div>
  );
};

const Dog = ( props ) => {
  // props = {name: '강아지'} -> props.name
  return (
    <div>
      <h2>{props.name} 컴포넌트</h2>
    </div>
  );
};

const Bird = ( { name } ) => {
  // props = {name: '시조새'} -> props.name
  
  // const { name } = props
  return (
    <div>
      <h2>{name} 컴포넌트</h2>
    </div>
  );
};

const Test2 = () => {
  return (
    <div>
      <Bird name="시조새" />
      <hr />
      <Dog name="강아지" />
      <hr />
      <Cat name="고양이" />
      {/* 
        <자식 컴포넌트 props명 = 전달값 />
        <자식 컴포넌트 변수처럼 = 전달값 />
        <자식 컴포넌트 속성 = 전달값 />
      */}
    </div>
  );
};

export default Test2;