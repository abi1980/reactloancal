export const Execute_Calculation = (loan_amount, installment_amount, simple_interest_rate, installment_interval) => {
    let oba = parseInt(loan_amount);

    let i;
    let sum_ppmt = 0;
    let sum_ci = 0;

    let ba, pmt, ppmt, ci;

    let output = [];

    for (i = 0; i < parseInt(installment_amount); i++) {
        let blamount = oba;
        let pmt = PMT_Calculation(parseInt(installment_amount), parseFloat(simple_interest_rate), parseInt(loan_amount), parseInt(installment_interval));
        let ci = Interest_Calculation(parseFloat(blamount), parseFloat(simple_interest_rate), parseInt(installment_interval));

        let ppmt = pmt - ci;

        ba = blamount - ppmt;

        if (i === (parseInt(installment_amount) - 1)) {
            ppmt = ppmt + ba;
            ci = ci - ba;
            ba = 0.00;
        }

        sum_ppmt = (sum_ppmt + parseFloat(ppmt));
        sum_ci = (sum_ci + parseFloat(ci));

        oba = ba.toFixed(2);

        //let output=this.state.output

        output.push({
            id: i + 1,
            pmt,
            ppmt: ppmt.toFixed(2),
            ci: parseFloat(ci).toFixed(2),
            ba: ba.toFixed(2)
        })
        // this.setState({ output })
    }

    /*
    this.ShowGadgetPanel(parseInt(installment_amount), parseFloat(simple_interest_rate), parseInt(loan_amount), parseInt(installment_interval), sum_ppmt, sum_ci);
    this.props.loanCalculation(this.state.output)
    this.setState({ output: [] })
    */



    return { pmt, ppmt, ci, ba, oba, sum_ci, sum_ppmt, output };
}





































export const bf = (i, oba, sum_ppmt, sum_ci, installment_amount, simple_interest_rate, loan_amount, installment_interval) => {
    let blamount = oba;
    let pmt = PMT_Calculation(parseInt(installment_amount), parseFloat(simple_interest_rate), parseInt(loan_amount), parseInt(installment_interval));
    let ci = Interest_Calculation(parseFloat(blamount), parseFloat(simple_interest_rate), parseInt(installment_interval));

    let ppmt = pmt - ci;

    let ba = blamount - ppmt;

    if (i === (parseInt(installment_amount) - 1)) {
        ppmt = ppmt + ba;
        ci = ci - ba;
        ba = 0.00;
    }

    sum_ppmt = (sum_ppmt + parseFloat(ppmt));
    sum_ci = (sum_ci + parseFloat(ci));

    oba = ba.toFixed(2);

    // out_put = out_put + "<tr><th scope=\"row\">" + (i + 1) + "</th><td>" + pmt + "</td><td>" + ppmt.toFixed(2) + "</td><td>" + parseFloat(ci).toFixed(2) + "</td><td>" + ba.toFixed(2) + "</td></tr>";
    /*
        //let output=state.output
        let { output } = state;
        output.push({
            id: i + 1,
            pmt,
            ppmt: ppmt.toFixed(2),
            ci: parseFloat(ci).toFixed(2),
            ba: ba.toFixed(2)
        })
        setState({ output })
    
    */
    return { oba, sum_ci, sum_ppmt };
}

function PMT_Calculation(term, apr, loan, interval) {
    var iapr = apr / (100 * interval);
    var amount = iapr * (-(loan)) * Math.pow((1 + iapr), term) / (1 - Math.pow((1 + iapr), term));
    return amount.toFixed(2);
}

function Interest_Calculation(loan, apr, interval) {
    apr = apr / (100 * interval);
    var amount = apr * loan;
    return amount.toFixed(2);
}

function ShowGadgetPanel(instamount, intrate, lamount, instint, sum_ppmt, sum_ci) {
    var pmt = this.PMT_Calculation(parseInt(instamount), parseFloat(intrate), parseInt(lamount), parseInt(instint));
    var ci = this.Interest_Calculation(parseFloat(lamount), parseFloat(intrate), parseInt(instint));

    var ppmt = pmt - ci;
    // this.props.loanCalculation(parseFloat(pmt).toFixed(2), parseFloat(sum_ppmt).toFixed(2), parseFloat(sum_ci).toFixed(2), this.state.start_date)
    // this.setState({ pmt: parseFloat(pmt).toFixed(2) });
    // this.setState({ tpp: parseFloat(sum_ppmt).toFixed(2) });
    // this.setState({ tip: parseFloat(sum_ci).toFixed(2) });
    // this.setState({ showdate: start_date });
}