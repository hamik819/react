import React from 'react';

const Test4 = () => {
    // 함수영역 모든 제어문 가능
    const done1 = true
    const done2 = false
    const done3 = undefined

    return (
        <div>
            <p>
                {
                    done1 === true ? <button>확인</button> : <button>취소</button>
                }
            </p>
            <p>
                { done1 && <strong>참의 결과</strong> }
            </p>
            <p>
                { done2 || <button>취소입니다.</button>}
            </p>
            <p>
                { done3 || <span>조회된 게시글이 없습니다.</span>}
            </p>
        </div>
    );
};

export default Test4;