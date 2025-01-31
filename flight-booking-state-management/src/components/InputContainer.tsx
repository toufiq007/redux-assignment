import { useDispatch } from "react-redux";
import { addBookingData } from "../redux/newBookingTicket/actions";
import { IBookingDataTypes } from "../types/IBookingData";
import { FormEvent, useState } from "react";

const InputContainer = () => {
  const dispatch = useDispatch();
  const [distinationForm, setDistinationForm] = useState("");
  const [distinationTo, setDistinationTo] = useState("");
  const [journeyData, setJourneyData] = useState("");
  const [guests, setGuests] = useState("");
  const [classesname, setClassesname] = useState("");
  const [ticketId, setTicket] = useState(1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const payload: IBookingDataTypes = {
      id: ticketId,
      destinationForm: distinationForm,
      destinationTo: distinationTo,
      journeyDate: journeyData,
      guests: guests,
      className: classesname,
    };

    console.log(payload);

    dispatch(addBookingData(payload));
    setTicket(ticketId + 1);
  };
  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
          {/* <!-- From --> */}
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                required
                onChange={(e) => setDistinationForm(e.target.value)}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Saidpur">Saidpur</option>
                <option value="Cox's Bazar">Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- To --> */}
          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                required
                onChange={(e) => setDistinationTo(e.target.value)}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Saidpur">Saidpur</option>
                <option value="Cox's Bazar">Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- Date --> */}
          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              required
              onChange={(e) => setJourneyData(e.target.value)}
            />
          </div>

          {/* <!-- Guests --> */}
          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src="./img/icons/Vector (1).svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
                required
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          {/* <!-- className --> */}
          <div className="des-from !border-r-0">
            <p>classNameName</p>
            <div className="flex flex-row">
              <img src="./img/icons/Vector (3).svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketclassName"
                id="lws-ticketclassName"
                required
                onChange={(e) => setClassesname(e.target.value)}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="Business">Business</option>
                <option value="Economy">Economy</option>
              </select>
            </div>
          </div>

          <button className="addCity" type="submit" id="lws-addCity">
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputContainer;
