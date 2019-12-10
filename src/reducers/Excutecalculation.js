export const Executecalculation = (output = [], action) => {
    switch (action.type) {
        case "updateDate":
            {
                output = action.payload;
                return [...output]
            }
        default:
            break;
    }
    return output;
};