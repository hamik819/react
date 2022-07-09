const Test6 = () => {
  const arr = ['김태리', '김다미', '최우식', '남주혁', '김진주']
  const data = [
    {id:1, name:'김태리'},
    {id:2, name:'김다미'},
    {id:3, name:'최우식'},
    {id:4, name:'남주혁'},
    {id:5, name:'김진주'},
  ]
  return (
    <div>
      <h2> map + key </h2>
      {/* 반복문 */}
      <ul>
        {
          arr.map( (item, index) => {
            return (<li key={index}>{ item }</li>)
          })
        }
      </ul>
      <hr />
      <ul>
        {
          // 출력이 하나일 경우 {} return 생략가능 - 많이씀
          arr.map( ( item, index ) => <li key={index}>{item}</li> )
        }
      </ul>
        <hr />
        <ul>
          {
            data.map( (item,index) => {
              return (<li key={item.id}> {item.id} / {item.name} </li>)
            })
          }
        </ul>
    </div>
  );
};

export default Test6;

/* 
  map

  arr.map(callback(currentValue[, index[, array]])[, thisArg])
  arr.map(함수( 현재값, 인덱스 ) {
    return 반환값
  })

  새로운 배열!

  **************************************************************
  key

  react에서는 리스트 출력 map으로 하고 + key
  Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다. key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다.
  
  Key - 주민번호같은것! (중복x, 고유값)
  index 는 단순히 출력만 할 경우 사용한다.
  삭제, 수정 등은 index 사용하지 않는 것이 좋다.

  **대부분의 경우는 id를 key로 사용한다.
*/