import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { contactReducerActions } from '../redux/reducers/contactSlice';

const ContactForm = () => {

const inputRef = useRef(null);
const inputRef2 = useRef(null);

const disPatch = useDispatch();

const handleAddBtn = ()=> {
  let name = inputRef.current.value
  let phone = inputRef2.current.value
  
disPatch(
  contactReducerActions.addContact({ 
  id: uuidv4(),
  name: name,
  phone : phone
}))
inputRef.current.value = '';
inputRef2.current.value = '';
};

  return (
    <div>
    <h1>연락처 APP</h1>
    <p><input placeholder='이름을 입력해주세요.' ref={inputRef}></input></p>
    <p><input placeholder='전화번호를 입력해주세요.' ref={inputRef2}></input></p>
    <input type='submit' value='등록' onClick={handleAddBtn}></input>
    </div>
  )
}

export default ContactForm