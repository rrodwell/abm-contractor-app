import React, { Component } from 'react';

//Packages
import $ from 'jquery'

const styles = {
    button: {
        // float: 'right',
        marginRight: '15px'
    }
}

class Services extends Component {

    constructor() {
        super();
        this.addService = this.addService.bind(this);
    }

    componentDidMount() {
        this.setState({numServices:0})
    }

    addService(e) {
        e.preventDefault()
        var newService = '<div class="form-group col-sm-7"><input type="text" class="form-control"/></div>'
        var price = '<div class="form-group col-sm-5"><input type="text" class="form-control"/></div>'

        $('.all-services').append(newService,price)

    }

    render () {
        return (
            <div>
                <h3>Services</h3>
                <hr/>
                <form>
                    <div className='row'>
                        <div className='col-sm-7 all-services'>
                            <div className='form-group col-sm-7'>
                                <label htmlFor='services'>Type of Service</label>
                                <input type='text' className='form-control' id='id_services'/>
                            </div>
                            <div className='form-group col-sm-5'>
                                <label htmlFor='services-price'>Price</label>
                                <input type='text' className='form-control' id='id_services_price'/>
                            </div>
                        </div>
                        <div className='col-sm-5 text-right'>
                            <button className='btn btn-primary' style={styles.button} onClick={this.addService}>
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