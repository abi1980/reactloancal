import React from 'react';
import './Widgetpanel.css';
import Showdate from './Showdate';

class Widgetpanel extends React.Component {
    constructor() {
        super();
        this.state = {
            pmt: 0.0,
            tpp: 0.0,
            tip: 0.0
        }
    }
    render() {
        return <div className="col-sm-6 mb-5 bg-light d-flex flex-wrap justify-content-center align-items-center">
            <div id="widget1" className="text-sm-center pt-5 pb-5">
                <h2>Monthly Payments</h2>
                <h1>$<span id="pmt">0.0</span></h1>
                <p>
                    Total Principal Paid $<span id="tpp">0.0</span>
                    <br />
                    Total Interest Paid $<span id="tip">0.0</span>
                </p>
                <hr />
                <Showdate />
            </div>
        </div>;
    }
}
export default Widgetpanel;
