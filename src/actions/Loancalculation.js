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

export const mapStateToProps = state => {
    console.log('state.output :', state.Executecalculation);
    return {
        output: state.Executecalculation
    }
}

export const mapDispatchToProps = dispatch => ({
    loanCalculation: (output) => {
        console.log("action..........", output)
        dispatch({
            type: "updateDate", payload: output
        })
    }
})
