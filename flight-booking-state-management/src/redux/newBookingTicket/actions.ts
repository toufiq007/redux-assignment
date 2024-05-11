import { IBookingDataTypes } from "../../types/IBookingData";
import { DECREMENTBOOKING, INCREMENTBOOKING } from "./actionTypes";

export const addBookingData = (bookingData: IBookingDataTypes) => {
  return {
    type: INCREMENTBOOKING,
    payload: bookingData,
  };
};

export const removeBookingData = (id: number) => {
  return {
    type: DECREMENTBOOKING,
    payload: id,
  };
};
