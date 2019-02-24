import React, {
    Component
} from 'react';

class Header extends Component {

    render() {
        return ( 
            <div style={containerStyle}>
                <h3>Title</h3>
            </div>
        );
    }
};

const containerStyle = {
    background: 'red'
};

export default Header;