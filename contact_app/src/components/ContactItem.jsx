import React from 'react'

const ContactItem = ({contact}) => {

  return (
    <div className='card'>
      <p>{contact.name}</p>
      <p>{contact.phone}</p>
    </div>
  )
}

export default ContactItem