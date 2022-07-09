const Test5 = () => {

  const handleClick1 = () => {
    alert('test1')
  }
  const handleClick2 = () => {
    alert('test2')
  }
  const handleClick3 = () => {
    alert('test3')
  }
  const make = ( num ) => {
    alert( num )
  }

  return (
    <div>
      <h2>이벤트 : on+첫글자대문자 : onClick</h2>
      <p>
        <button onClick={ handleClick1 }>클릭</button>
        <button onClick={ handleClick2 }>클릭</button>
        <button onClick={ handleClick3 }>클릭</button>
      </p>
      <p>
        <button onClick={ () => {
          console.log('test');
          console.log('test');
          console.log('test');
          //여러줄의 명령어는 반드시 {}이 들어가야 한다
        }}>클릭</button>
        <button onClick={ () => {
          console.log('testest')
        }}>클릭</button>
        {/* 간단히 사용할 경우 */}
        <button onClick={ () => console.log('testtest')}>클릭</button>
      </p>
      <p>
        {/* 
          함수는 함수() 쓰면 무조건 호출 -> 처음부터 실행된다.
          값을 넘길 때 함수(값) => 함수(매개변수)로 받기

          해결
          함수로 한번 묶어준다
          () => 함수명(값)
        */}
        <button onClick={ () => make(100) }>클릭</button>
        <button onClick={ () => make(200) }>클릭</button>
      </p>
    </div>
  );
};

export default Test5;