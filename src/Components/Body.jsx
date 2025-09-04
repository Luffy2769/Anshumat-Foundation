import React from "react";
import { FaPlay } from "react-icons/fa";
import './Body.css'

export default function Body() {
  return (
    <div
      className="d-flex justify-content-lg-start justify-content-center"
      style={{
        background: "linear-gradient(135deg, #cac5c5ff 0%, #dd7971ff 100%)",
        height: "90vh",
        
      }}
    >
      <div
        className="d-flex flex-column align-items-start justify-content-center"
        style={{ maxWidth: "70vh", marginLeft: '30vh' }}
      >
        <h1 className="d-flex sm-fs-4 mt-5 display-1">
          Educate. Employ. <br />
          Empower.
        </h1>
        <p className="py-5 text-wrap fs-5">
          We are a not-for-profit committed to creating brighter futures through
          education, digital literacy, skill development, and leadership
          programs across India.
        </p>

        <div className="d-flex gap-5">

        <button className="dntbtn text-nowrap" type="submit">
          DONATE NOW
        </button>

        <a href="https://www.youtube.com/watch?v=VhBl3dHT5SY" target="_blank">
          <button className="btn btn-danger btn-lg rounded-circle ripple-btn" style={{height: '53px', width: '53px'}}>
            <FaPlay />
          </button>
        </a>
        </div>
      </div>
    </div>
  );
}
