import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class NavbarComponent extends Component {

    render() {
        return (
            <Jumbotron className="text-center">
                <h1>ABM Subcontractor Management</h1>
                <p>Web tool to manage subcontractor information.</p>
            </Jumbotron>
        )
    }
};

export default NavbarComponent;