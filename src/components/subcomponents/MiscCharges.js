import React, { Component } from 'react';

//Packages
import $ from 'jquery';

const styles = {
    button: {
        marginRight: '15px'
    }
}

class MiscCharges extends Component {

    constructor(props) {
        super(props);
        this.addCharge = this.addCharge.bind(this);
    }

    componentDidMount() {
        this.setState({numCharges:0})
    }

    addCharge(e) {
        e.preventDefault()
        var newCharge = '<div class="form-group col-sm-7"><input type="text" class="form-control"/></div>'
        var price = '<div class="form-group col-sm-5"><input type="text" class="form-control"/></div>'

        $('.all-charges').append(newCharge,price)

    }

    render() {
        return (
            <div>
                <h3>Misc. Charges</h3>
                <hr/>

                <form>
                    <div className='row'>
                        <div className='col-sm-7 all-charges'>
                            <div className='form-group col-sm-7'>
                                <label htmlFor='charges'>Type of Charge</label>
                                <input type='text' className='form-control' id='id_charges'/>
                            </div>
                            <div className='form-group col-sm-5'>
                                <label htmlFor='misc-price'>Price</label>
                                <input type='text' className='form-control' id='id_misc_price'/>
                            </div>
                        </div>
                        <div className='col-sm-5 text-right'>
                            <button className='btn btn-primary' style={styles.button} onClick={this.addCharge}>
                                <span className='glyphicon glyphicon-plus'></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
};

export default MiscCharges;