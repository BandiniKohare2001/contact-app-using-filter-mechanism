import React from "react";
import "./ContactCard.css";

function ContactCard({ name, mobile }) {
    return (
        <>
            <div className="container">
                <div className="contact-card">
                    <h2>{name}</h2>
                    <p>{mobile}</p>
                </div>
            </div>
        </>
    )
}
export default ContactCard