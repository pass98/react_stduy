import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useState } from 'react'


const ContactList = () => {
  const contacts = useSelector((state)=>state.contact)
  const [contact,keywords] = useState(contacts)
  const [filter,setfilter] = useState(contacts)

  useEffect((filter.map(()=>{})),[])


  return (
    <div>
      <SearchBox/>

    
      <ContactItem />
      
    </div>
  )
}

export default ContactList