import React, { useEffect, useState } from 'react';
import './App.css';
import { phonebook } from './data/phonebook';
import ContactCard from './components/ContactCard/ContactCard';
import Navbar from './components/Navbar/Navbar';



function App() {
 const [contacts, setContacts] = useState(phonebook);
 const [searchTerm, setSearchTerm] = useState('')

 useEffect(() => {
  const filteredContacts = phonebook.filter((contact) => {
    const name = contact.name.toLocaleLowerCase();
    const mobile = contact.mobile.toString();
    const query = searchTerm.toLowerCase();
    return (name.includes(query) || mobile.includes(query))
  })

  setContacts(filteredContacts);
 }, [searchTerm])
  return (
<>
<Navbar />
<h1 className='heading'>Contact List</h1>
<input 
type='text' 
placeholder='🔍 Search Contact' className='search' 
searchTerm={searchTerm} 
onChange={(e) => {setSearchTerm(e.target.value)}}
/>
<div>
  {contacts.map((contact, index) => {
const {name, mobile} = contact;

return  <ContactCard 
key={index} 
name={name} 
mobile={mobile} 
/> 
  })}
</div>
{
  contacts.length === 0 ? <span className='pa-center'>Contact is not found!😔</span> : null
}
</>

  );
}

export default App;
