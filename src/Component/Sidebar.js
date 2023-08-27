import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../Img/Logo.svg';
import Home from "../Img/Home.svg"
import Reports from '../Img/Reports.svg'
import Notifications from '../Img/Notifications.svg'
import Settings from '../Img/Settings.svg'
import Logout from '../Img/Logout.svg'
import Badge from 'react-bootstrap/Badge'


export default function Sidebar() {
  return (
    <>
        <Nav activeKey="1" variant="pills" className="flex-column">
        <Navbar.Brand href="/home" className="text-light fs-5 p-3 mb-5"><img src={Logo} alt='logo' /> Inter-act</Navbar.Brand>
                    <Nav.Link eventKey="1" style={{backgroundColor:"#1F2849"}}>
                        <Navbar.Brand href="/home" className="p-2 text-secondary fw-semibold">
                            <img alt="home"src={Home} className="d-inline-block align-top"/> Home
                        </Navbar.Brand>
                    </Nav.Link>
                    <Nav.Link>
                        <Navbar.Brand href="/reports" className="p-2 text-secondary fw-semibold">
                            <img alt="reports"src={Reports} className="d-inline-block align-top"/> Reports
                        </Navbar.Brand>
                    </Nav.Link>
                    <Nav.Link>
                        <Navbar.Brand href="/notifications" className="p-2 text-secondary fw-semibold">
                            <img alt="notifications"src={Notifications} className="d-inline-block align-top"/> Notifications <Badge bg="success" className="text-dark ms-4">1</Badge>
                        </Navbar.Brand>
                    </Nav.Link>
                    <Nav.Link>
                        <Navbar.Brand href="/settings" className="p-2 text-secondary fw-semibold">
                            <img alt="settings"src={Settings} className="d-inline-block align-top"/> Settings
                        </Navbar.Brand>
                    </Nav.Link>
                    <Nav.Link>
                        <Navbar.Brand href="/logout" className="p-2 text-secondary fw-semibold">
                            <img alt="logout"src={Logout} className="d-inline-block align-top"/> Logout
                        </Navbar.Brand>
                    </Nav.Link>
                </Nav>
    </>
  )
}