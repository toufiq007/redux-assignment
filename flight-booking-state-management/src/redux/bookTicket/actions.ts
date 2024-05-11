import { IBookingDataTypes } from "../../types/IBookingData";
import { ADD_TICKET, REMOVE_TICKET } from "./actionTypes";

export const addTicket = (bookingData: IBookingDataTypes) => {
  return {
    type: ADD_TICKET,
    payload: bookingData,
  };
};

export const removeTicket = (id: number) => {
  return {
    type: REMOVE_TICKET,
    payload: id,
  };
};
