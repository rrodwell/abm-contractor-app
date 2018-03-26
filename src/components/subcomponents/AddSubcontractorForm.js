import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Subcontractor from '../../models/SubcontractorModel';
import SubcontractorInfo from './SubcontractorInfo';
import Services from './Services';
import MiscCharges from './MiscCharges';

//Packages
import $ from 'jquery';

//Utils
// import helpers from '../../utils/helpers';

class AddSubcontractorForm extends Component {

  createNewSub(){
    //grab all information from form
    let name = $('#id_name').val();
    let phoneNumber = $('#id_phone').val();
    let email = $('#id_email').val();
    let companyName = $('#id_company').val();
    let city = $('#id_city').val();
    let state = $('#id_state').val();
    let miles = $('#id_miles').val();
    let services = $('#id_services').val();
    let charges = $('#id_charges').val();

    //build newSub from Constructor
    // var newSub = new Subcontractor('Ryan', '3','ryanrodwell','test company','atl','ga','atl','10',['service1','service2'],['charge1','charge2']);

    // console.log(newSub);
    console.log(name,phoneNumber,email,companyName,city,state,miles,services,charges);

    //Send newSub to helper function to post to db
    // helpers.addNewSubcontractor(newSub);

  }

  render () {
    return (
      <div id='subcontractor-form'
        style={{
          display: this.props.formDisplay
        }}>

        <SubcontractorInfo/>
        <Services/>
        <MiscCharges/>
        <hr/>
        <div className='text-right'>
          <Button bsStyle='success' id='add-btn'
              onClick={this.createNewSub}>Add Subcontactor</Button>
          <Button bsStyle='danger' id='cancel-btn'
              onClick={this.props.cancelForm}>Cancel</Button>
        </div>

      </div>
    )}
  };

export default AddSubcontractorForm;