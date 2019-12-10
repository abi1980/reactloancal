import { createStore, combineReducers } from 'redux';
/* https://www.youtube.com/watch?v=3sjMRS1gJys */

import { Executecalculation } from "../reducers/Excutecalculation"

const ourCalFunction = combineReducers({
    Executecalculation
});

const store = createStore(ourCalFunction);

export default store;