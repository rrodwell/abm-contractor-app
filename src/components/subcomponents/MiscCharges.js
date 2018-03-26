import React, { Component } from 'react';

const styles = {
    button: {
        marginRight: '15px'
    }
}

class MiscCharges extends Component {

    render() {
        return (
            <div>
                <h3>Misc. Charges</h3>
                <hr/>

                <form>
                    <div className='row'>
                        <div className='col-sm-10'>
                            <div className='form-group col-sm-4'>
                                <label htmlFor='charges'>Type of Charge</label>
                                <input type='text' className='form-control' id='id_charges'/>
                            </div>
                            <div className='form-group col-sm-3'>
                                <label htmlFor='misc-price'>Price</label>
                                <input type='text' className='form-control' id='id_misc_price'/>
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

export default MiscCharges;