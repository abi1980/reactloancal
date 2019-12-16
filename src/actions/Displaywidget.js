export const mapStateToProps = state => {
    console.log('state.pmt etc :', state);
    return {
        pmt: state.Createwidgetdata.pmt,
        tpp: state.Createwidgetdata.tpp,
        tip: state.Createwidgetdata.tip
    }
}

export const mapDispatchToProps = (dispatch) => ({
    Diplaywidget: (pmt, tpp, tip) => {
        console.log("pmt action..........", pmt)
        dispatch({
            type: "updateWidget",
            payload: {
                pmt: pmt,
                tpp: tpp,
                tip: tip
            }
        })
    }
})