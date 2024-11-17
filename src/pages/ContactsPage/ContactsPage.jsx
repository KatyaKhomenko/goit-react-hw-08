import React from 'react'
import css from './ContactsPage.module.css'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from '../../components/ContactList/ContactList'
import Header from '../../components/Header/Header'
import SearchBox from '../../components/SearchBox/SearchBox'

const ContactsPage = () => {
  return (
    <div className={css.contactsPage}>
        <Header/>
        <ContactForm />
        <SearchBox />
        <ContactList />
        
    </div>
  )
}

export default ContactsPage