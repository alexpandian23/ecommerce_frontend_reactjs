import { Nav } from 'react-bootstrap';
import { useState } from 'react';
import { Dashboard } from '../Dashboard';
import {  Addproduct } from '../Addfile/Addproduct';
import { User } from '../user/User';


function Navbaradmin() {
    const [activeLink, setActiveLink] = useState("/dashboard");

    const handleSelect = (selectedKey) => {
        setActiveLink(selectedKey);
    };

    return (
        <>
            <Nav fill variant="tabs" activeKey={activeLink} onSelect={handleSelect}>
                <Nav.Item>
                    <Nav.Link eventKey="/dashboard">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/Addfile/Addproduct">Addproucts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/user"> User </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/">Log Out</Nav.Link>
                </Nav.Item>
            </Nav>

            {activeLink === '/dashboard' && <Dashboard />}
            {activeLink === '/Addfile/Addproduct' && <Addproduct />}
            {activeLink === '/user' && <User />}
            {/* {activeLink === '/' && <Login />} */}

          
        </>
    );
}

export default Navbaradmin;