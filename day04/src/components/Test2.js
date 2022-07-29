import React, { useState } from 'react';

const dataList = [
    {id:1, name:"김다미"},
    {id:2, name:"김태리"},
    {id:3, name:"김철수"},
    {id:4, name:"유재석"},
    {id:5, name:"최우식"}
]

const Test2 = () => {
    const [ data , setData ] = useState( dataList )

    // 삭제
    const onDel1 = () => {
        // 삭제는 filter
        setData( data.filter( item => item.name !== '유재석' ) )
    }
    const onDel2 = () => {
        setData( data.filter( item => item.id !== 3 ) )
    }
    const onDel3 = ( id ) => {
        setData( data.filter( item => item.id !== id ) )
    }

    // 추가
    const onAdd1 = () => {
        setData([
            ...data,
            {
                id:6,
                name: '최민식'
            }
        ])
    }
    const onAdd2 = ( name ) => {
        setData([
            ...data,
            {
                // data.length + 1 이렇게 쓰진 않음
                id: data.length + 1,
                // name: name
                name
            }
        ])
    }

    // 수정
    const onMod1 = () => {
        setData( data.map( item => {
            if( item.id === 4){
                return {
                    ...item,
                    name : '강호동'
                }
            } else {
                return item
            }
        } ) )
    }
    const onMod2 = () => {
        setData( data.map( item => item.id === 5 ? {...item, name:'김혜수'} : item ) )
    }
    const onMod3 = ( id ) => {
        setData( data.map( item => item.id === id ? {...item, name:'송혜교'} : item ) )
    }
    return (
        <div>
            <ul>
                {
                    data.map( item => <li key={ item.id }>
                        { item.id } / { item.name }
                    </li> )
                }
            </ul>
            <hr />
            <p>
                <button onClick={ onDel1 }>유재석 삭제</button>
                <button onClick={ onDel2 }>3번 삭제</button>
                {/* 함수 뒤에 가로 넣으면 즉시 실행되기 때문에 즉시 실행 방지 () => */}
                <button onClick={ () => onDel3(1) }>1번 삭제</button>
                <button onClick={ () => onDel3(5) }>5번 삭제</button>
                <button onClick={ () => onDel3(2) }>2번 삭제</button>
            </p>
            <p>
                <button onClick={ onAdd1 }>최민식 추가</button>
                <button onClick={ () => onAdd2('장도연') }>장도연 추가</button>
                <button onClick={ () => onAdd2('김도윤') }>김도윤 추가</button>
            </p>
            <p>
                <button onClick={ onMod1 }>4수정</button>
                <button onClick={ onMod2 }>5수정</button>
                <button onClick={ () => onMod3(1)}>1수정</button>
            </p>
        </div>
    );
};

export default Test2;