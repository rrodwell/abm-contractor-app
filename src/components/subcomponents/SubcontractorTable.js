import React, { Component } from 'react';


class SubcontractorTable extends Component {

  render () {
    return (
        <div>
                <table className="table table-striped table-bordered center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody id="subcontractors">

                    </tbody>
                </table>

        </div>
    )}
  };

export default SubcontractorTable;