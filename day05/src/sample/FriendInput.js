import React from 'react';
import { useState, useRef } from 'react';

const FriendInput = ({ onAdd }) => {
    const [form, setForm] = useState({
        name:'', age:'', image:''
    })
    const { name, age, image } = form
    const nameRef = useRef()

    const changeInput = (e) => {
        const { value, name } = e.target
        setForm({
            ...form,
            [name] : value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if( !name || !age || !image ) return
        // onAdd( name, age, image )
        onAdd( form )
        nameRef.current.focus()
        setForm({
            name:'', age:'', image:''
        })
    }
    return (
        <form className="formadd" onSubmit={onSubmit} autoComplete="off">
            <p>
                <label htmlFor="username">이름</label>
                <input type="text" id="username" value={name} name="name" onChange={changeInput} ref={nameRef} />
            </p>
            <p>
                <label htmlFor="userage">나이</label>
                <input type="text" id="userage" value={age} name="age" onChange={changeInput} />
            </p>
            <p>
                <label htmlFor="userpic">사진</label>
                <input type="text" id="userpic" value={image} name="image" onChange={changeInput} />
            </p>
            <p>
                <button type="submit"> 추가 </button>
            </p>
        </form>
    );
};

export default FriendInput;