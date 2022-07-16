const Test12Ani = ( { changeInput2, ani } ) => {
  return (
    <div>
      <label>동물 : </label>
      <input type="text" value={ani} onChange={changeInput2}/>
      <span style={{marginLeft:10,color:'hotpink'}}>{ani}</span>
    </div>
  );
};

export default Test12Ani;