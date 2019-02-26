import React from 'react';
import Header from '../components/Header';

const withHeader = (WrappedComponent) => (props) => (
    <div>
        <Header />
        <WrappedComponent {...props}/>
    </div>
);

export default withHeader;