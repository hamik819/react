import React, { useEffect, useLayoutEffect } from 'react';
import { useState, useRef } from 'react';

const Test2 = () => {
    const [ count, setCount ] = useState(1)
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()

    const onColor = () => {
        setCount( count + 1 )

        ref1.current.style.backgroundColor = 'pink'
        ref2.current.style.backgroundColor = 'hotpink'
        ref3.current.style.backgroundColor = 'skyblue'
    }

    // 화면에 그려진 후 실행
    /* useEffect ( () => {
        console.log('useEffect');
        ref1.current.style.backgroundColor = 'yellow'
        ref2.current.style.backgroundColor = 'tomato'
        ref3.current.style.backgroundColor = 'lime'
    }) */

    // 화면에 그려지기 전에 먼저 실행
    useLayoutEffect( () => {
        console.log('useLayoutEffect');
        ref1.current.style.backgroundColor = 'yellow'
        ref2.current.style.backgroundColor = 'tomato'
        ref3.current.style.backgroundColor = 'lime'
    })

    return (
        // 형식1 - 좋은 방법은 아니다. 많이 사용x
        <div style={{margin:15}}>
            <h2> useEffect 형식1 </h2>
            <h1> 카운트: {count}</h1>
            <h2 ref={ref1}> useEffect </h2>
            <h2 ref={ref2}> useLayoutEffect </h2>
            <h2 ref={ref3}> {count} 결과 입니다 </h2>
            <button onClick={ onColor }> 카운트 + 컬러 </button>
        </div>
    );
};

export default Test2;

/*

Effect Hook을 사용하면 함수 컴포넌트에서 side effect를 수행할 수 있습니다.
side effect : 부수효과 - 함수가 결과값을 반환 하는 것 외에 다른 일을 하는 것
side effect : 비동기통신 요청/응답 - ajax
- DOM조작, 구독/취소 등

useEffect : 화면에 그려진 후

React의 class 생명주기
componentDidMount : 처음한번만
componentDidUpdate : 갱신
componentWillUnmount : 종료시
-------------------------------3개를 합쳐서 => useEffect

형식)
useEffect( 콜백함수, [의존값] )
useEffect( () => {}, [])

형식1) mount / update - 많이 사용하지 않는다.
useEffect( () => {
    실행문
})

형식2) mount 한번만 실행
useEffect( () => {
    실행문
},[])

형식3) mount / 의존성 특정 state, 특정 props가 변경될 때 
useEffect( () => {
    실행문
},[state, props])

형식4) mount / 의존성 특정 state, 특정 props가 변경될 때
정리(Clean-up)

useEffect( () => {
    실행문
    
    return() => {
        뒷정리
        Clean-up
    }

},[state, props])

위에서 정리(clean-up)가 필요하지 않은 side effect를 보았지만, 정리(clean-up)가 필요한 effect도 있습니다. 외부 데이터에 구독(subscription)을 설정해야 하는 경우를 생각해보겠습니다. 이런 경우에 메모리 누수가 발생하지 않도록 정리(clean-up)하는 것은 매우 중요합니다.

사용범위
1. props를 받아서 갱신할 때
2. 외부 api (비동기 처리 - ajax)
3. 시간 - setTimeout, setInterval
4. 외부 라이브러리

*/
