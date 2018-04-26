import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import $ from 'jquery';
import Papa from 'papaparse';


class Csv extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    readCSV() {
        const parseFile = $('#file-upload')[0].files[0]
        const files = $('#file-upload')[0].files;

        let options = {
            'header': true,
            complete: function () {
                let results = arguments[0].data;
                console.log('Results:', results);
                // helpers.createTestCase(results);
                // $('#file-path').val('')
            },
            error: function (error, file) {
                console.log('ERROR:', error, file)
            }
        };

        if (files.length > 0) {
            Papa.parse(parseFile, options);
        } else {
            console.log('This file is empty.');
        }

    }

    openFile() {
        console.log('upload');
        $('#file-upload').trigger('click');
    }


  render () {
    return (
      <div className='container'>
        <h1>Upload CSV!</h1>
        <div className='form'>
            <div className='row'>
                <div className='file-field input-field'>
                    <Button className='' node='a' onClick={this.openFile}>
                        <span>Select</span>
                        <input id='file-upload' type='file'
                            style={{
                                display: 'none'
                            }} />
                    </Button>
                    <div className='file-path-wrapper'>
                        <input className='file-path' type='text' />
                    </div>
                </div>
                <Button className='' node='a' onClick={this.readCSV}>Upload</Button>
            </div>
        </div>
      </div>
    )}
  };

export default Csv;