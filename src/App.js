import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { directive } from '@babel/types';

function App() {
  return (
    <div>
      <div className="container">
        <div className="container-fluid">
          <div className="title-wrap text-sm-center pt-3 pb-3">
            <h2>Loan Repayment Calculator</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-2">
              <div id="error_div" className="text-danger"></div>
              <form action="#" method="POST" id="cal_form">
                <input type="hidden" value="0" id="ba" name="ba" />
                <div className="form-group">
                  <label for="start_date">Start Date:</label>
                  <input type="datetime" readonly="readonly" className="form-control" id="start_date"
                    placeholder="Start Date" name="start_date" required />
                </div>
                <div className="form-group">
                  <label for="loan_amount">Loan Amount:</label>
                  <input type="number" className="form-control" id="loan_amount" placeholder="Loan Amount" name="loan_amount" value="10000" required />
                </div>
                <div className="form-group">
                  <label for="installment_amount">Installment Amount:</label>
                  <input type="number" className="form-control" id="installment_amount"
                    placeholder="Installment Amount" name="installment_amount" value="12" max="60" required />
                </div>
                <div className="form-group">
                  <label for="simple_interest_rate">Simple Interest Rate (%):</label>
                  <input type="number" step="0.01" className="form-control" id="simple_interest_rate" placeholder="Simple Interest Rate" name="simple_interest_rate" value="4.5" max="50" required />
                </div>
                <div className="form-group">
                  <label for="installment_interval">Installment Interval:</label>
                  <select className="form-control" id="installment_interval" placeholder="Installment Interval"
                    name="installment_interval">
                    <option value="365">Daily</option>
                    <option value="52">Weekly</option>
                    <option value="12">Monthly</option>
                  </select>
                </div>
                <p class="red1 text-danger">Please note payments are not collected on weekends or public
                            holidays.</p>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
              <div>
                <p><br /></p>
              </div>
            </div>
            <div class="col-sm-6 mb-5 bg-light d-flex flex-wrap justify-content-center align-items-center">
              <div id="widget1" class="text-sm-center pt-5 pb-5">
                <h2>Monthly Payments</h2>
                <h1>$<span id="pmt">0.0</span></h1>
                <p>
                  Total Principal Paid $<span id="tpp">0.0</span>
                  <br />
                  Total Interest Paid $<span id="tip">0.0</span>
                </p>
                <hr />
                <h2>Payment Started on</h2>
                <h3 id="showdate"></h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Payment Amount</th>
                  <th scope="col">Principal Amount</th>
                  <th scope="col">Interest Amount</th>
                  <th scope="col">Balance Owed</th>
                </tr>
              </thead>
              <tbody id="out_put"></tbody>
            </table>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default App;
