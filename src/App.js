import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="gif">
        <img src="../../Assets/Online Doctor.gif" alt="" />
      </div>
      <div className="container-home">
        <div className="titlename-home">
          <h1>DHANVANTRI SIDDHALAYA</h1>
          <p>Dr.Madhankumar.G.BSMS</p>
          <br />
          <div className="call-home">
            <button className="button">
              <a href="tel:9944891960" className="btn btn-white">
                Appointment
              </a>
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <button className="button">
              <a href="tel:7845892010" className="btn btn-light-blue">
                Consults
              </a>
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      );
    </div>
  );
}
