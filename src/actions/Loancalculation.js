import { createStore, combineReducers } from 'redux';

const initialState = {
    startingBalance: 1000
}

/*
//Forms Inputs
sdate = start_date
lamount = loan_amount
instamount = installment_amount
intrate = simple_interest_rate
instint = installment_interval

Calculation to store
pmt: Monthly Payments,
tpp: Total Principal Paid,
tip: Total Interest Paid
*/
const loanCalculation = (sdate, lamount, instamount, intrate, instint, pmt, tpp, tip) => {
    return {
        type: 'LOAN_CAL',
        payload: {
            sdate: sdate,
            lamount: lamount,
            instamount: instamount,
            intrate: intrate,
            instint: instint,
            pmt: pmt,
            tpp: tpp,
            tip: tip
        }
    };
};