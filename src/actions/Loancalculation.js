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
    return {
        output: state.Executecalculation
    }
}

export const mapDispatchToProps = dispatch => ({
    loanCalculation: (output) => {
        dispatch({
            type: "updateGrid", payload: output
        })
    }
})
