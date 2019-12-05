const claimHistory = (gridsheet = [], action) => {
    switch (action.type) {
        case action.LOAN_CAL:
            return [...gridsheet, action.payload];
            break;
        default:
            break;
    }
    return gridsheet;
};