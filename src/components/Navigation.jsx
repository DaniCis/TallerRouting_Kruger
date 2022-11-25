import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

const Navigation = () =>{
    return(
        <>
            <Navbar >
                <Container className='container-nav'>
                    <Nav className="nav1">
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/imc">IMC Calculator</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/age">Age Calculator</NavLink>
                    </Nav>
                        <Navbar.Brand className='nav-title'>
                            <img alt="" src={logo}/>{' '}
                            KrugerStar
                        </Navbar.Brand>
                    <Nav className="nav1">
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/clock">My Clock</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/about">About Me</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/contact">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
            <hr className='division'/>
        </>
    )
}

export default Navigation;