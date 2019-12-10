import React from 'react';
import './Formpanel.css';
import { Form, Button } from 'react-bootstrap';
import { Execute_Calculation } from '../../functions/basicfunctions';
import { mapStateToProps, mapDispatchToProps } from '../../actions/Loancalculation';
import { connect } from "react-redux"
class Formpanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start_date: '',
            loan_amount: 10000,
            installment_amount: 2,
            simple_interest_rate: 4.5,
            installment_interval: 365,

            pmt: "",
            tpp: "",
            tip: "",

            showdate: "",

            output: []
        }
    }

    CalculateLoan = async e => {
        /** Previously we declare the variables in this way  */
        /*
        let sdate = this.state.start_date;
        let lamount = parseInt(this.state.loan_amount);
        let instamount = parseInt(this.state.installment_amount);
        let intrate = parseFloat(this.state.simple_interest_rate);
        let instint = parseInt(this.state.installment_interval);
        */
        /** we can use this way instead of the above in this we have to use same state name and var name  */
        //let { start_date, loan_amount, installment_amount, simple_interest_rate, installment_interval } = this.state

        let { loan_amount, installment_amount, simple_interest_rate, installment_interval } = this.state;
        //let data;
        this.data = await Execute_Calculation(loan_amount, installment_amount, simple_interest_rate, installment_interval);
        console.log('this.data :', this.data);
        this.setState({
            output: this.data.output
        }/*, () => {
            this.props.loanCalculation(this.state.output)
        }*/);
        this.props.loanCalculation(this.state.output);
    }

    FormfieldchangeHndler = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        return <div className="col-sm-6 mb-2">
            <div id="error_div" className="text-danger"></div>
            <Form>
                <Form.Group controlId="ba">
                    <Form.Control type="hidden" />
                </Form.Group>
                <Form.Group controlId="start_date">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="date" placeholder="Start Date" format="YYYY-MM-DD" inputformat="YYYY-MM-DD" required onChange={this.FormfieldchangeHndler} />
                    <Form.Text className="text-muted">
                        Starting Date from where you want to start the Loan.
                </Form.Text>
                </Form.Group>
                <Form.Group controlId="loan_amount">
                    <Form.Label>Loan Amount</Form.Label>
                    <Form.Control type="number" value={this.state.loan_amount} placeholder="Enter Loan Amount" required onChange={this.FormfieldchangeHndler} />
                    <Form.Text className="text-muted">
                        Please enter the loan amount you willing to borrow.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="installment_amount">
                    <Form.Label>Installment Amount</Form.Label>
                    <Form.Control type="number" value={this.state.installment_amount} placeholder="Enter Installment Amount" max="60" required onChange={this.FormfieldchangeHndler} />
                    <Form.Text className="text-muted">
                        Please enter the number of installment you want for borrowed amount.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="simple_interest_rate">
                    <Form.Label>Simple Interest Rate (%)</Form.Label>
                    <Form.Control type="number" value={this.state.simple_interest_rate} placeholder="Enter Installment Amount" max="50" required onChange={this.FormfieldchangeHndler} />
                    <Form.Text className="text-muted">
                        Please enter the expected Intrest Rate on borrowed amount.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="installment_interval">
                    <Form.Label>Installment Interval</Form.Label>
                    <Form.Control as="select" onChange={this.FormfieldchangeHndler} >
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
export default connect(mapStateToProps, mapDispatchToProps)(Formpanel);