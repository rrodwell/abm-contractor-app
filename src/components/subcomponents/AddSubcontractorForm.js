import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class AddSubcontractorForm extends Component {

  render () {
    return (
      <div id="subcontractor-form"
        style={{
          display: this.props.formDisplay
        }}>

        <form method="POST">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="id_name"/>
            </div>
            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input type="text" className="form-control" id="id_location"/>
            </div>
            <div className="form-group">
                <label htmlFor="description">
                    Description
                </label>
                <textarea type="text" className="form-control" id="id_description" rows="3"></textarea>
            </div>
            <Button bsStyle='success' id='add-btn'
            onClick={this.props.addSub}>
              Add
          </Button>
          <Button bsStyle='danger' id='cancel-btn'
            onClick={this.props.cancelForm}>
              Cancel
          </Button>
        </form>
      </div>
    )}
  };

export default AddSubcontractorForm;