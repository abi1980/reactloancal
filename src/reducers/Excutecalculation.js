export const Executecalculation = (output = [], action) => {
    switch (action.type) {
        case "updateGrid":
            {
                output = action.payload;
                return [...output]
            }
        default:
            break;
    }
    return output;
};