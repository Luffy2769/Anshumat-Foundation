import React from "react";
import './Header.css'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Header() {
  return (
    <div
      className="d-flex text-white py-2 justify-content-between"
      style={{ backgroundColor: "#fc6950ff" }}>
      <div className="d-flex ms-5 gap-5">
        <a href="tel:+019772599112" className="text-white text-decoration-none phone-hover">
  <span><FaPhone className="mx-2" />+01 (977) 2599 12</span>
</a>

        <a href="https://maps.google.com/?q=Durgapur,West Bengal 713363,India" 
   className="text-white text-decoration-none location-hover" 
   target="_blank">
  <span><FaMapMarkerAlt className="mx-2" />Durgapur, West Bengal 713363 | India</span>
</a>

        <a href="mailto:contact@anshumat.org" className="text-white text-decoration-none email-hover">

  <span><FaEnvelope className="mx-2" />contact@anshumat.org</span>
</a>
      </div>
      <div className="d-flex justify-content-between gap-3 me-5">
        <div className=""><FaFacebookF /></div>
        <div><FaInstagram /></div>
        <div><FaTwitter /></div>
        <div><FaYoutube /></div>
      </div>
    </div>
  );
}
