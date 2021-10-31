import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './asset/mystyle.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
    <div className="container">
    <div className="row">
    <div className="col-md-4 col-sm-12">
    <div className="footer_logo_img">
       <img src="https://bsek.edu.pk/images/footer%20logo.png" className="img-fluid" />
    </div>
    <div className="text">
    <p className="card-text text-white pt-3">
    BSEK was established in 1950 the major ambition of this board is to promote school education and this board work for betterment of education and maintain high standards of education in Karachi
    </p>
    <div className="icons">
    <p>
     <span>< FaPhoneAlt /></span> Phone: 02199260256
    </p>
    <p>
     <span>< FaEnvelope /></span> Email: complaint@bsek.edu.pk
    </p>
    <p>
     <span>< FaMapMarkerAlt /></span> Block 5 Nazimabad, Karachi
    </p>
    </div>
    </div>
    </div>
    
    <div className="col-md-4 col-sm-12">
         <div className="map_area">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924234.6301497458!2d66.5949610598482!3d25.193389485801198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1635684025980!5m2!1sen!2s" style={{border: 0}} allowFullScreen loading="lazy" />

    </div>
    </div>

    <div className="col-md-4 col-sm-12">
    <div className="map_area">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924234.6301497458!2d66.5949610598482!3d25.193389485801198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1635684025980!5m2!1sen!2s" style={{border: 0}} allowFullScreen loading="lazy" />

    </div>
    </div>

    </div>
    <hr className="bg-white" />
    <div class="bottom_icons">
     <span>< FaTwitter /></span> <span>< FaFacebookF /></span> 
    </div>
    <p class="footer_copyright">© Copyright 2019   <span>BSEK</span>. All Rights Reserved</p>
    </div>
    </div>
  );
}

export default Footer;
