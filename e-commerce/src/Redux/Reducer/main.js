// combine all reducer here and then send store
// (object wise)

import {combineReducers} from "redux"
import {cartreducer , widhlistreducer} from './Reducer';

const rootreducer = combineReducers({
    cartreducer , widhlistreducer
})

export default rootreducer;