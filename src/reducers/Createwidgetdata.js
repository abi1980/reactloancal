export const Createwidgetdata = (data = [], action) => {
    switch (action.type) {
        case "Createwidgetdata":
            {
                data.pmt = action.payload.pmt;
                data.tpp = action.payload.tpp;
                data.tip = action.payload.tip;
                return [...data]
            }
        default:
            break;
    }
    return data;
};