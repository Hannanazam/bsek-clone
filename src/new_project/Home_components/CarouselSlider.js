import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../asset/mystyle.css';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

function CarouselSlider() {
  return (
     <div className="slider_height">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://bsek.edu.pk/admin/_lib/file/imgslider/histry.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://bsek.edu.pk/admin/_lib/file/imgslider/finls1(1).jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://bsek.edu.pk/admin/_lib/file/imgslider/histry.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <i>< FaAngleLeft /></i>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <i>< FaAngleRight /></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
  );
}

export default CarouselSlider;
