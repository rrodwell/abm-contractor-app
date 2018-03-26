import React, { Component } from 'react';

const styles = {
    button: {
        // float: 'right',
        marginRight: '15px'
    }
}

class Services extends Component {

    render () {
        return (
            <div>
                <h3>Services</h3>
                <hr/>
                <form>
                    <div className='row'>
                        <div className='col-sm-10'>
                            <div className='form-group col-sm-4'>
                                <label htmlFor='services'>Type of Service</label>
                                <input type='text' className='form-control' id='id_services'/>
                            </div>
                            <div className='form-group col-sm-3'>
                                <label htmlFor='services-price'>Price</label>
                                <input type='text' className='form-control' id='id_services_price'/>
                            </div>
                        </div>
                        <div className='col-sm-2 text-right'>
                            <button className='btn btn-primary' style={styles.button}>
                                <span className='glyphicon glyphicon-plus'></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
};

export default Services;