import {Navbar, Nav, Container} from 'react-bootstrap';
import {React, useState} from 'react'
import CreateCardPage from './CreateCardPage';
const NavB = () => {
    const [newcards, setNewCard] = useState(false);
    const newcardenable=()=>{
        setNewCard(!newcards)
      }
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand='ld' className={newcards ===true? "navbar1" : "navbar"}>
        <Container>
            <Navbar.Brand>Abstract | Help Center</Navbar.Brand>
            <button className='nav-btn' onClick={newcardenable}>Create New</button>
            </Container>  
             {newcards === true ? <CreateCardPage /> : " "}         
        </Navbar>
    </header>
  )
}

export default NavB