import React, { Fragment } from 'react';

const Test1 = () => {
    return (
        <Fragment>
            <h1>JSX영역</h1>
            <h4>태그는 반드시 닫아야 한다, 빈태그는 꼭 /, return 안에 줄이 한줄 이상이면 반드시 div, section, article 등으로 영역설정</h4>
            <h4>React.Fragment 영역처리</h4>
            <input />
            <p
            /*
                태그형식안에 여러줄 주석
             */
            // 한줄
             >
                나는 문단입니다.
            </p>
            {/* 주석처리 */}
        </Fragment>
    );
};

export default Test1;