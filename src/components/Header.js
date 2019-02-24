import React, {
    Component
} from 'react';
import {
    Navbar
} from 'react-bootstrap';
import Logo from '../assets/logo-chamatheapp.png';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return ( 
            <Navbar variant="dark" bg="dark">
                <Link to={'/'}>
                    <Navbar.Brand>
                        <span style={containerStyle}>
                            <img
                                alt=""
                                src={Logo}
                                width="60"
                                height="60"
                                className="d-inline-block align-top"
                            />
                            <span style={titleStyle}>
                            </span>
                            {'ChamaTheApp - ToDo Challenge'}
                        </span>
                    </Navbar.Brand>
                </Link>
            </Navbar>
        );
    }
};

const containerStyle = { 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '20', 
    height: '20'
};
const titleStyle = {
    marginLeft: 15
};

export default Header;