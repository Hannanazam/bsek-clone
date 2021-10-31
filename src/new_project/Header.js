import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './asset/mystyle.css';
import Home from './Home';
import Result from './Result';
import Scrutiny from './Scrutiny';
import Release from './Release';
import Download from './Download';
import Contact from './Contact';
import Tender from './Tender';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import $ from 'jquery';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";


class Header extends Component {
    componentDidMount = () => {
        $(".nav-link").first().addClass("active");
        $(document).ready(function() {
            $(".nav-link").click(function() {
            $(".nav-link").first().removeClass("active");
            $(".nav-link").removeClass("active");
            $(this).addClass("active");
        });
        });
    }
    render(){
    return(
            <Router>
        <div className="main_header">
                <div className="set_margin">
            <div className="row">
            <div className="col-md-4 m-auto">
            <div className="main_image">
                <img src="https://bsek.edu.pk/images/logo3.png" className="img-fluid" />
            </div>
            </div>
            <div className="col-md-8 d-md-none d-lg-block">
    <div className="header_card">
  <div className="row">
  <div className="cards col-md-3">
  <div className="mb-3">
        <div className="row g-0">
          <div className="col-md-2">
          <div className="main_icon">
          < FaPhoneAlt />
           </div>
         </div>
          <div className="col-md-10">
            <div className="card-body">
              <p className="card-title">Call Now</p>
              <p className="card-text">02199260256</p>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="cards col-md-4">
  <div className="mb-3">
        <div className="row g-0">
          <div className="col-md-2">
           <div className="main_icon">
               < FaEnvelope />
           </div>
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <p className="card-title">Send Message</p>
              <p className="card-text">complaint@bsek.edu.pk</p>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="cards col-md-5">
  <div className="mb-3">
        <div className="row g-0">
          <div className="col-md-2">
           <div className="main_icon">
               < FaMapMarkerAlt />
           </div>
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <p className="card-title">Our Location</p>
              <p className="card-text">Block 5 Nazimabad, Karachi</p>
            </div>
          </div>
        </div>
        </div>
      </div>
  </div>
    </div>
            </div>
            </div>
                </div>
        </div>

        <nav className="navbar sticky-top navbar-light navbar-expand-lg navbar-expand-md bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="/Scrutiny" className="nav-link">SCRUTINY RESULT</Link>
              </li>
              <li className="nav-item">
                <Link to="/Result" className="nav-link">X RESULT (SCIENCE)</Link>
              </li>
              <li className="nav-item">
                <Link to="/Release" className="nav-link">PRESS RELEASES</Link>
              </li>
              <li className="nav-item">
                <Link to="/Download" className="nav-link">DOWNLOADS</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">CONTACT US</Link>
              </li>
              <li className="nav-item">
                <Link to="/Tender" className="nav-link">TENDERS</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        


      
      <Route exact path="/" component={Home} />
      <Route path="/Scrutiny"component={Scrutiny} />
      <Route path="/Result"component={Result} />
      <Route path="/Release"component={Release} />
      <Route path="/Download"component={Download} />
      <Route path="/Contact"component={Contact} />
      <Route path="/Tender"component={Tender} />
    </Router>
    );
    

}

}


export default Header;
