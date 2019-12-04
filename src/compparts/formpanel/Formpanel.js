import React from 'react';
import './Formpanel.css';

class Formpanel extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return <div className="col-sm-6 mb-2">
            <div id="error_div" className="text-danger"></div>
            <form action="#" method="POST" id="cal_form">
                <input type="hidden" value="0" id="ba" name="ba" />
                <div className="form-group">
                    <label for="start_date">Start Date:</label>
                    <input type="datetime" readonly="readonly" className="form-control" id="start_date" placeholder="Start Date" name="start_date" required />
                </div>
                <div className="form-group">
                    <label for="loan_amount">Loan Amount:</label>
                    <input type="number" className="form-control" id="loan_amount" placeholder="Loan Amount" name="loan_amount" value="10000" required />
                </div>
                <div className="form-group">
                    <label for="installment_amount">Installment Amount:</label>
                    <input type="number" className="form-control" id="installment_amount" placeholder="Installment Amount" name="installment_amount" value="12" max="60" required />
                </div>
                <div className="form-group">
                    <label for="simple_interest_rate">Simple Interest Rate (%):</label>
                    <input type="number" step="0.01" className="form-control" id="simple_interest_rate" placeholder="Simple Interest Rate" name="simple_interest_rate" value="4.5" max="50" required />
                </div>
                <div className="form-group">
                    <label for="installment_interval">Installment Interval:</label>
                    <select className="form-control" id="installment_interval" placeholder="Installment Interval" name="installment_interval">
                        <option value="365">Daily</option>
                        <option value="52">Weekly</option>
                        <option value="12">Monthly</option>
                    </select>
                </div>
                <p className="red1 text-danger">Please note payments are not collected on weekends or public
                holidays.</p>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div>
                <p><br /></p>
            </div>
        </div>;
    }
}
export default Formpanel;