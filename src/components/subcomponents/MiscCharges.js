import React, { Component } from 'react';

const styles = {
    button: {
        float: 'right',
        marginRight: '15px'
    }
}

class MiscCharges extends Component {

    render() {
        return (
            <div>
                <h3>Misc. Charges</h3>
                <hr/>
                <button className='btn btn-primary' style={styles.button}>
                    <span className='glyphicon glyphicon-plus'></span>
                </button>
                <form>
                    <div className='row'>
                        <div className='form-group col-sm-4'>
                            <label htmlFor='charges'>Type of Charge</label>
                            <input type='text' className='form-control' id='id_charges'/>
                        </div>
                        <div className='form-group col-sm-3'>
                            <label htmlFor='misc-price'>Price</label>
                            <input type='text' className='form-control' id='id_misc_price'/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
};

export default MiscCharges;