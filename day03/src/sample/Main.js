import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import './style.css'
const Main = () => {
  // 이전, 다음 버튼
  const [step, setStep] = useState(1)

  const [data, setData] = useState({
    username:'홍길동',
    age:'',
    addr:'',
    tel:'',
    job:'',
    email:'',
    gender:'',
    inter:''
  })
  // 구조분해
  const {username, age, addr, tel, job, email, gender, inter} = data

  // 글자변경
  const changeInput = (e) => {
    const { value, name } = e.target
    setData({
      ...data,
      [name]:value
    })
  }

  // 페이지 이동 다음
  const onNext = () => {
    setStep( step + 1 )
  }

  // 페이지 이동 이전
  const onPrev = () => {
    setStep( step - 1 )
  }

  return (
    <div className='wrap'>
      {/* {
        step === 1 && <Step1 username={username} age={age} addr={addr} tel={tel} changeInput={changeInput} onNext={onNext}/>
      } */}
      {/* {
        step === 2 && <Step2 job={job} email={email} gender={gender} inter={inter} changeInput={changeInput} onNext={onNext} onPrev={onPrev}/> 
      } */}
      {
        step === 1 && <Step1 data={data} changeInput={changeInput} onNext={onNext}/>
      }
      {
        step === 2 && <Step2 data={data} changeInput={changeInput} onNext={onNext} onPrev={onPrev}/> 
      }
      {
        step === 3 && <Step3 username={username} age={age} addr={addr} tel={tel} job={job} email={email} gender={gender} inter={inter} onNext={onNext} onPrev={onPrev} />
      }
      {/* {...data} */}
      {
        step === 4 && <Step4 username={username} />
      }
      {/* <Step1 username={username} age={age} addr={addr} tel={tel} changeInput={changeInput}/> */}
      {/* <Step2 job={job} email={email} gender={gender} inter={inter} changeInput={changeInput}/> */}
      {/* <Step3 username={username} age={age} addr={addr} tel={tel} job={job} email={email} gender={gender} inter={inter} /> */}
      {/* <Step4 username={username} /> */}
    </div>
  );
};

export default Main;