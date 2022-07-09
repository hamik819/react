import Test4Sub from "./Test4Sub";

const Test4 = () => {
  return (
    <>
      <Test4Sub 
        name="김태리"
        age={25}
        addr="서울"
        tel="010-1111-2222"
        color="tomato"
        bgcolor="yellow"
        done={true}
      />
      <hr />
      <Test4Sub 
        name="김다미"
        addr="제주"
        tel="010-2222-3333"
        color="hotpink"
        bgcolor="pink"
      />
      <hr />
      <Test4Sub />
      <hr />
    </>
  );
};

export default Test4;