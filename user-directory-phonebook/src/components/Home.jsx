import {Contacts}  from "../data/ContactList"
import {Link} from "react-router-dom"
 
export default function Home () {
    return (
        <div>
            <h2>Welcome to the User Directory Phonebook</h2>
            <p>Select a contact to view details.</p>
            {Contacts.map((contact)=>(
                <div key={contact.id}>
                    <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
                </div>
            ))}
            

        </div>
    );
}