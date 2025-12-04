import {Contacts} from "./data/ContactList" 
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import {Routes,Route,Link} from "react-router-dom"
import ContactDetails from "./components/UserDetails"

export default function App() { 
  return (
    <div> 
      <Navbar/>
      <h1 className="text-3xl font-bold underline">Contact List</h1>
      <Routes> 
        < Route path="/" element={<Home/>}/>
        < Route path="/contact/:contactId" element={<ContactDetails/>}/>
      </Routes>
    </div>
    
  )
}