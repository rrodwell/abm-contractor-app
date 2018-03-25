import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SearchForm extends Component {



    render () {
    return (
        <div className='search-form'>
            <form className='form-inline'>
                <div className='form-group'>
                    <input type='text' className='form-control' id='search' placeholder='Enter description...'/>
                </div>
                <Button type='submit' bsStyle='primary' id='search-btn'>Search</Button>
            </form>
        </div>
    )}
};

export default SearchForm;