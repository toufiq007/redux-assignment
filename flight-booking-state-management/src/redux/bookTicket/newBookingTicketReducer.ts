import { IBookingDataTypes } from "../../types/IBookingData";
import { ADDBOOKINGTICKET, REMOVEBOOKINGTICKET } from "./actionTypes";

type initialStateType = {
  bookingItems: IBookingDataTypes[];
};
type actionType = {
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

const initialState: initialStateType = {
  bookingItems: [],
};

export const newBookingReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case ADDBOOKINGTICKET:
      return {
        ...state,
        bookingItems: [...state.bookingItems, action.payload],
      };
    case REMOVEBOOKINGTICKET:
      return {
        ...state,
        bookingItems: state.bookingItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
