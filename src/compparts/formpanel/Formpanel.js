import React from 'react';
import './Formpanel.css';
import { Form, Button } from 'react-bootstrap';

class Formpanel extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    CalculateLoan = () => {
        //this.setState(state => ({ isShow: !state.isShow }));
        alert("Yes");
    };
    render() {
        return <div className="col-sm-6 mb-2">
            <div id="error_div" className="text-danger"></div>
            <Form>
                <Form.Group controlId="ba">
                    <Form.Control type="hidden" />
                </Form.Group>
                <Form.Group controlId="start_date">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="date" placeholder="Start Date" format="YYYY-MM-DD" inputformat="YYYY-MM-DD" />
                    <Form.Text className="text-muted">
                        Starting Date from where you want to start the Loan.
                </Form.Text>
                </Form.Group>
                <Form.Group controlId="loan_amount">
                    <Form.Label>Loan Amount</Form.Label>
                    <Form.Control type="number" placeholder="Enter Loan Amount" required />
                    <Form.Text className="text-muted">
                        Please enter the loan amount you willing to borrow.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="installment_amount">
                    <Form.Label>Installment Amount</Form.Label>
                    <Form.Control type="number" placeholder="Enter Installment Amount" max="60" required />
                    <Form.Text className="text-muted">
                        Please enter the number of installment you want for borrowed amount.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="simple_interest_rate">
                    <Form.Label>Simple Interest Rate (%)</Form.Label>
                    <Form.Control type="number" placeholder="Enter Installment Amount" max="50" required />
                    <Form.Text className="text-muted">
                        Please enter the expected Intrest Rate on borrowed amount.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="installment_interval">
                    <Form.Label>Installment Interval</Form.Label>
                    <Form.Control as="select">
                        <option value="365">Daily</option>
                        <option value="52">Weekly</option>
                        <option value="12">Monthly</option>
                    </Form.Control>
                    <Form.Text className="text-muted">
                        Please select installment interval for borrowed amount.
                    </Form.Text>
                </Form.Group>
                <p className="red1 text-danger">Please note payments are not collected on weekends or public
                holidays.</p>
                <Button variant="primary" type="button" onClick={this.CalculateLoan}>
                    Submit
                </Button>
            </Form>
            <div>
                <p><br /></p>
            </div>
        </div>;
    }
}
export default Formpanel;