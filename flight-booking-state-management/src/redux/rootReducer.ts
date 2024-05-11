import { combineReducers } from "redux";
import { newBookingReducer } from "./newBookingTicket/newBookingReducer";


export const rootReducer = combineReducers({newBookingReducer})