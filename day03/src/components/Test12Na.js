const Test12Na = ( {changeInput1, name} ) => {
  return (
    <div>
      <label>이름 : </label>
      <input type="text" value={name} onChange={changeInput1}/>
      <span style={{marginLeft:10,color:'hotpink'}}>{name}</span>
    </div>
  );
};

export default Test12Na;