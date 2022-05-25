import React from "react";
import { FaTrash } from "react-icons/fa";

const ContactCard = ({contact}) => {

    return (
        <>
        <div className="contact-cards-div" key={contact.id}>
            <div>
                {contact.name}
                
            </div>
            <div>
                {contact.email}
               
            </div>
            <div><a href="#"><FaTrash /></a></div>
        </div>
        </>
    )
}

export default ContactCard;