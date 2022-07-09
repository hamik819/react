import PropTypes from 'prop-types';

const Test4Sub = ( { name,age,addr,tel,color,bgcolor,done } ) => {
  // 비구조할당
  // const { name,age,addr,tel,color,bgcolor,done } = props
  return (
    <div style={{width:250, padding:20, marginBottom:15, backgroundColor:bgcolor, border:`3px solid ${color}`}}>
      <h2> {name} 신상명세서</h2>
      <ul>
        <li>나이:{age}</li>
        <li>주소:{addr}</li>
        <li>전화:{tel}</li>
        <li>글자색:{color}</li>
        <li>배경색:{bgcolor}</li>
        <li>동의여부:{done ? '동의' : '비동의'}</li>
      </ul>
    </div>
  );
};

/* const Test4Sub = ( props ) => {
  return (
    <div style={{width:250, padding:20, marginBottom:15, backgroundColor:'yellow', border:'1px solid #000'}}>
      <h2> {props.name} 신상명세서</h2>
      <ul>
        <li>나이:{props.age}</li>
        <li>주소:{props.addr}</li>
        <li>전화:{props.tel}</li>
        <li>글자색:{props.color}</li>
        <li>배경색:{props.bgcolor}</li>
        <li>동의여부:{props.done ? '동의' : '비동의'}</li>
      </ul>
    </div>
  );
}; */

// 유효성검사
Test4Sub.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  addr: PropTypes.string,
  tel: PropTypes.string,
  color: PropTypes.string,
  bgcolor: PropTypes.string,
  done: PropTypes.bool,
};

// props의 초깃값을 정의
Test4Sub.defaultProps = {
  name: '홍길동',
  age: 20,
  addr: '서울',
  tel: '010-1111-1111',
  color: 'red',
  bgcolor: 'lime',
  done: true
};


export default Test4Sub;

/* 
  props 타입 검사를 위해 Flow 또는 TypeScript 사용
  PropTypes는 전달받은 데이터의 유효성을 검증하기 위해서 다양한 유효성 검사기(Validator)
  개발모드 console 창 확인

  import PropTypes from 'prop-types';
  자식컴포넌트.propTypes = {
  props명: PropTypes.타입
  props명: PropTypes.타입.isRequired

  *******************************************************************

  초기 Prop 값
  defaultProps 프로퍼티를 할당함으로써 props의 초깃값을 정의할 수 있습니다.

  props의 초깃값을 정의합니다.
  자식컴포넌트.defaultProps = {
    props명: 초기값
  };

*/