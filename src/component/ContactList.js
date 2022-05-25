import React from "react";
import ContactCard from "./ContactCard";


const ContactList = ({contacts}) => {

    const renderContact = contacts.map((contact) => {
        return (
            <ContactCard contact={contact} />
        )
    })
    
    return (
        <div className="pt-8">
            <h4>{renderContact}</h4>
        </div>
    )
}

export default ContactList;