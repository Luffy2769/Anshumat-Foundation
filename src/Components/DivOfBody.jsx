import React from "react";
import './DivOfBody.css'
import { FaArrowRight } from 'react-icons/fa'
import { FaBusinessTime } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { MdMenuBook } from "react-icons/md";

export default function DivOfBody() {
  return (
    <div className="container-fluid bbx p-4" style={{maxWidth: "60vw"}}>
      <div className="row justify-content-start">
        <div className="col-12 col-md-6 col-lg-4 text-start mb-4 px-4">
            <MdMenuBook style={{color: 'rgba(247, 107, 52, 1)', height: '40px', width: '40px'}}/>
          <h3 className="fs-2">
            Educate.
          </h3>
          <p className="fs-5">Bringing practical learning and digital skills for everyone — making knowledge truly accessible.</p>
          <a href="#" className="fs-6 fs-md-5 fs-lg-4 text-decoration-none fw-bold" 
   style={{color: 'rgba(247, 107, 52, 1)'}}>
  SUPPORT A PROJECT <FaArrowRight className="ms-1" />
</a>

        </div>

        <div className="col-12 col-md-6 col-lg-4 text-start mb-4 px-4">
            <FaBusinessTime style={{color: 'rgba(247, 107, 52, 1)', height: '40px', width: '40px'}}/> 
          <h3 className="fs-2">
            Employ.
          </h3>
          <p className="fs-5">Training people in real tools, guiding them to real jobs — faster, smarter, and with purpose.</p>
          <a href="#" className="fs-6 fs-md-5 fs-lg-4 text-decoration-none fw-bold" 
   style={{color: 'rgba(247, 107, 52, 1)'}}>
  SPONSER A TRAINING <FaArrowRight className="ms-1" />
</a>
        </div>

        <div className="col-12 col-md-6 col-lg-4 text-start mb-4 px-4">
            <BsStarFill style={{color: 'rgba(247, 107, 52, 1)', height: '40px', width: '40px'}}/>
          <h3 className="fs-2">
            Empower.
          </h3>
          <p className="fs-5">Giving people the platform, support, confidence, and community to grow, lead, and build better futures.</p>
          <a href="#" className="fs-6 fs-md-5 fs-lg-4 text-decoration-none fw-bold" 
   style={{color: 'rgba(247, 107, 52, 1)'}}>
  EMPOWER A LIFE <FaArrowRight className="ms-1" />
</a>
        </div>
      </div>
    </div>
  );
}
