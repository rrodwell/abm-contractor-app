import React, { Component } from 'react';

class SubcontractorInfo extends Component {


    render () {
        return (
            <div>
                <h3>Subcontactor Information</h3>
                <hr/>
                <form>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className='form-group col-sm-6'>
                                <label htmlFor='name'>Name</label>
                                <input type='text' className='form-control' id='id_name'/>
                            </div>
                            <div className='form-group col-sm-6'>
                                <label htmlFor='email'>Email</label>
                                <input type='email' className='form-control' id='id_email'/>
                            </div>
                            <div className='form-group col-sm-6'>
                                <label htmlFor='phone'>Phone</label>
                                <input type='text' className='form-control' id='id_phone'/>
                            </div>
                            <div className='form-group col-sm-6'>
                                <label htmlFor='company'>Company</label>
                                <input type='text' className='form-control' id='id_company'/>
                            </div>
                            <div className='form-group col-sm-4'>
                                <label htmlFor='city'>City</label>
                                <input type='text' className='form-control' id='id_city'/>
                            </div>
                            <div className='form-group col-sm-2'>
                                <label htmlFor='state'>State</label>
                                <select className="form-control" id="id_state">
                                    <option>Select State</option>
                                    <option>AL</option>
                                    <option>AK</option>
                                    <option>AZ</option>
                                    <option>AR</option>
                                    <option>CA</option>
                                    <option>CO</option>
                                    <option>CT</option>
                                    <option>DE</option>
                                    <option>FL</option>
                                    <option>GA</option>
                                    <option>HI</option>
                                    <option>ID</option>
                                    <option>IN</option>
                                    <option>IA</option>
                                    <option>KS</option>
                                    <option>KY</option>
                                    <option>LA</option>
                                    <option>ME</option>
                                    <option>MD</option>
                                    <option>MA</option>
                                    <option>MI</option>
                                    <option>MN</option>
                                    <option>MS</option>
                                    <option>MO</option>
                                    <option>MT</option>
                                    <option>NE</option>
                                    <option>NV</option>
                                    <option>NH</option>
                                    <option>NJ</option>
                                    <option>NM</option>
                                    <option>NY</option>
                                    <option>NC</option>
                                    <option>ND</option>
                                    <option>OH</option>
                                    <option>OK</option>
                                    <option>OR</option>
                                    <option>PA</option>
                                    <option>RI</option>
                                    <option>SC</option>
                                    <option>SD</option>
                                    <option>TN</option>
                                    <option>TX</option>
                                    <option>UT</option>
                                    <option>VT</option>
                                    <option>VA</option>
                                    <option>WA</option>
                                    <option>WV</option>
                                    <option>WI</option>
                                    <option>WY</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='form-group col-sm-8'>
                                <label htmlFor='area'>Areas Serviced</label>
                                <input type='text' className='form-control' id='id_area'/>
                            </div>
                            <div className='col-sm-4 text-right'>
                                <button className='btn btn-primary'>
                                    <span className='glyphicon glyphicon-plus'></span>
                                </button>
                            </div>
                            { //<div className='form-group col-sm-4'>
                            //<label htmlFor='miles'>Miles Willing To Travel</label>
                            //<input type='text' className='form-control' id='id_miles'/>
                            //</div>
                            }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
};

export default SubcontractorInfo;