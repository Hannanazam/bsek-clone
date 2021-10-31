import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../asset/mystyle.css';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

function CardSection() {
  return (
     <div className="container">
     <div className="card_section">
    <h2 className="section-title">Welcome to Board of Secondary Education <span> Karachi</span></h2>
    <div class="feature_head">
							   
							   <p>BSEK was established in 1950 the major ambition of this board is to promote school education and this board work for betterment of education and maintain high standards of education in Karachi</p> 
							
						</div>

            <div className="cards">
            <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="card_child text-center">
              <div className="img_child">
        <img src="https://bsek.edu.pk/admin/_lib/file/imgslider/Secretary.JPG" className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">Muhammad Ali Shaiq</h5>
          <p className="card-text mb-0"><small className="text-muted">Secretary</small></p>
          <a href="#" className="btn fw-bold text-muted">Secretary Message</a>
        </div>
      </div>
            </div>

             <div className="col-md-4 col-sm-12">
              <div className="card_child text-center">
              <div className="img_child">
        <img src="https://bsek.edu.pk/admin/_lib/file/imgslider/Secretary.JPG" className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">Muhammad Hannan</h5>
          <p className="card-text mb-0"><small className="text-muted">CEO</small></p>
          <a href="#" className="btn fw-bold text-muted">CEO Message</a>
        </div>
      </div>
            </div>

             <div className="col-md-4 col-sm-12">
              <div className="card_child text-center">
              <div className="img_child">
        <img src="https://bsek.edu.pk/admin/_lib/file/imgslider/chairman.jpg" className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">Prof.Syed Sharaf Ali Shah</h5>
          <p className="card-text mb-0"><small className="text-muted">Chairmain</small></p>
          <a href="#" className="btn fw-bold text-muted">Chairmain Message</a>
        </div>
      </div>
            </div>

            
            </div>
      </div>
      </div>
      </div>
  );
}

export default CardSection;
