import {NavLink} from 'react-router-dom'


export default function Navbar(){
    return(<div className='bg-blue-500
     w-full flex justify-center p-4 text-white text-xl '>
    <nav>
        <NavLink to="/" className={({isActive})=>( isActive ?"border-20" : "border-5")}>Home</NavLink>
        <NavLink to="/contact/1" className={({isActive})=>( isActive ?"border-20" : "border-5")} >UserDetails</NavLink>
    </nav>
     </div>
    )}