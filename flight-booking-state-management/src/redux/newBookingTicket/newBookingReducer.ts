import { IBookingDataTypes } from "../../types/IBookingData";
import { DECREMENTBOOKING, INCREMENTBOOKING } from "./actionTypes";

export type InitialStateProps = {
  bookingStateData: IBookingDataTypes[];
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
        sitStatus: string;
      }
    | number;
};

const initialBookingState: InitialStateProps = {
  bookingStateData: [],
};

export const newBookingReducer = (
  state = initialBookingState,
  action: ActionType
) => {
  switch (action.type) {
    case INCREMENTBOOKING:
      return {
        ...state,
        bookingStateData: [...state.bookingStateData, action.payload],
      };
    case DECREMENTBOOKING:
      return {
        ...state,
        bookingStateData: state.bookingStateData.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
