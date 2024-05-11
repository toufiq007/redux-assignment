import { IBookingDataTypes } from "../../types/IBookingData";
import { ADD_TICKET, REMOVE_TICKET } from "./actionTypes";

type initialStateType = {
  bookingData: IBookingDataTypes[];
};
const initialState: initialStateType = {
  bookingData: [],
};

type ActionType = {
  type: string;
  payload:
    | {
        id: number;
        destinationForm: string;
        destinationTo: string;
        journeyDate: string;
        guests: string;
        className: string;
      }
    | number;
};

export const bookingReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ADD_TICKET:
      return {
        ...state,
        bookingData: [...state.bookingData, action.payload],
      };
    case REMOVE_TICKET:
      return {
        ...state,
        bookingData: state.bookingData.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
