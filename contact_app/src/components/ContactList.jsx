import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'


const ContactList = () => {
  const contacts = useSelector((state)=>state.contact.contacts)

 

  const handleFilterhange = (e) => {
    
  
  }

  return (
    <div>
      <SearchBox/>
      {contacts.map((item)=>(
        <ContactItem key={item.id} contact={item}/>
      ))}



    </div>
  )
}

export default ContactList