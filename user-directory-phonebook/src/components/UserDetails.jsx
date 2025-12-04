import {useParams} from "react-router-dom"
import {Contacts} from "../data/ContactList"
import {Link} from "react-router-dom"

export default function UserDetails(){
    const {contactId}=useParams();
    const contact=Contacts.find((contact)=>contact.id===Number(contactId))

    return(
        
            <div >
                <h1>User Details</h1>
               <h2>Id:{contact.id}</h2> 
                <h2>Name: {contact.name}</h2>
                <h2>Email: {contact.email}</h2>
                <Link to="/">Back to Home</Link>
                
            </div>
        )
    }