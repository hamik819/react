const Test1 = () => {
  // 함수영역 - 모든제어문이 가능하다
  const css1 = {
    backgroundColor:'hotpink',
    color:'#fff',
    fontSize:20,
    padding:10
  }
  const title="제목입니다."
  return (
    <>
      <h2 className="test"> JSX 영역 </h2>
      {/* 주석 */}
      <h3 style={css1}>{ title }</h3>
      <p>
        
      </p>
    </>
  );
};

export default Test1;