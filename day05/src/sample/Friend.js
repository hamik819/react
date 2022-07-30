import React from 'react';
import './style.css';
import FriendList from './FriendList';
import dataList from '../assets/api/friendData';
import { useState, useRef } from 'react';
import FriendInput from './FriendInput';

const Friend = () => {
  const no = useRef( dataList.length + 1 )
  const [data, setData] = useState( dataList )
  const [isChk, setIsChk] = useState( true )

  // 삭제
  const onDel = ( id ) => {
    setData( data.filter( item => item.id !== id ))
  }

  // 모두삭제
  const onRemove = () => {
    setData([])
  }

  // 복구
  const onRestore = () => {
    setData( dataList )
  }

  // 추가비활성
  const changeInput = (e) => {
    const { checked } = e.target
    setIsChk( checked )
  }

  // 친구들 새로 추가
  // const onAdd = ( name, age, image ) => {
  //   setData([
  //     ...data,
  //     {
  //       id:no.current++,
  //       name:name,
  //       age:age,
  //       image:image
  //     }
  //   ])
  // }
  const onAdd = ( form ) => {
    form.id = no.current++
    setData([ ...data, form ])
  }

  return (
    <div className="wrap">
      <h1>친구들 총인원 : {data.length} </h1>
      <label className="chk" htmlFor="inputBox">
        <input type="checkbox" name="" id="inputBox" checked={isChk} onChange={changeInput}/>
        {
          isChk ? '추가비활성' : '추가활성'
        }
      </label>

      <FriendList data={data} onDel={onDel}/>

      <p className="btn">
        <button onClick={onRemove}>모두삭제</button>
        <button onClick={onRestore}>초기복구</button>
      </p>

      {/* 추가비활성 */}
      {
        isChk && <FriendInput onAdd={onAdd} /> 
      }
    </div>
  );
};

export default Friend;