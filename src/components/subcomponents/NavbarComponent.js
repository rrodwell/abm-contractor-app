import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class NavbarComponent extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Jumbotron>
                <h1>ABM Subcontractor Management</h1>
                <p>Web tool to manage subcontractor information.</p>
            </Jumbotron>
        )
    }
};

export default NavbarComponent;