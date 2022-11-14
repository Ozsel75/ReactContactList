import React from 'react'
import List from '../list'
import Form from '../Form'
import { useState, useEffect } from 'react'

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect (() => {
    console.log(contacts);
  }, [contacts])

  return (
    <div>Contacts
        <List />
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts