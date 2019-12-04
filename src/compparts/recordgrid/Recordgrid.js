import React from 'react';
import './Recordgrid.css';
import Showgrid from './Showgrid';

class Recordgrid extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Payment Amount</th>
                        <th scope="col">Principal Amount</th>
                        <th scope="col">Interest Amount</th>
                        <th scope="col">Balance Owed</th>
                    </tr>
                </thead>
                <Showgrid />
            </table>
        </div>;
    }
}
export default Recordgrid;
