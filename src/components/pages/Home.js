import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import HelloWorld from '../subcomponents/HelloWorld';
import SubcontractorTable from '../subcomponents/SubcontractorTable';
import AddSubcontractorForm from '../subcomponents/AddSubcontractorForm';
import SearchForm from '../subcomponents/SearchForm';
// import { HelloWorld } from './subcomponents'

class Home extends Component {
  constructor() {
    super();

    this.state = {
      formDisplay: 'none',
      newSubButton: 'inline-block'
    }

    this.addSub = this.addSub.bind(this);
    this.cancelForm = this.cancelForm.bind(this);

  }

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log(this.state)
  }

  openForm() {
    this.setState({
      formDisplay: 'block',
      newSubButton: 'none'
    });

    console.log("OpenForm: ",this.state);

  }

  cancelForm() {
    this.setState({
      formDisplay: 'none',
      addButton: 'none',
      cancelButton: 'none',
      newSubButton: 'inline-block'
    });

    console.log('CloseForm: ',this.state);
  }

  addSub() {

  }

  render () {
    return (
      <div>
        <div id='add-form-btns'>
          <Button id='new-btn' onClick={this.openForm.bind(this)}
            style={{
              display: this.state.newSubButton
            }}>
              New Subcontractor
          </Button>
        </div>
        <AddSubcontractorForm cancelForm = {this.cancelForm} {...this.state}/>
        <hr/>
        <SearchForm/>
        <hr/>
        <SubcontractorTable />
      </div>
    )}
  };

export default Home;