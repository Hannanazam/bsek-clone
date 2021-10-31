import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import SliderImg1 from '../images/image1.jpg';
import SliderImg2 from '../images/image2.jpg';
import SliderImg3 from '../images/image3.jpg';


class Header extends React.Component{
  render(){
    return(
      <section id="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Disabled</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </section>
    )
  }
}
class Slider extends React.Component{
  render(){
    return(
      <section id="Carousel">
            <img src={SliderImg1} className="d-block w-100" alt="..." />
            <img src={SliderImg2} className="d-block w-100" alt="..." />
            <img src={SliderImg3} className="d-block w-100" alt="..." />
        </section>
    )
  }
}

export {
  Header,
  Slider
};
