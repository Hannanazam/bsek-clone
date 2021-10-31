import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../asset/mystyle.css';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

function HowtoUse() {
  return (
     <div className="use_section">
     <div className="container">
     <div className="card_section">
    <h2 className="section-title">How To Use <span> BSEK Portal</span>?</h2>
    <div class="feature_head">
							   <p>This video tutorial teach you how to use bsek portal , fill the applications and submit the forms.</p> 
							
						</div>

                        <div className="container">
                        <div className="col-12 text-center p-4 bg-white">
                        <video src="https://bsek.edu.pk/images/bsekvideo.mp4" className="w-100" type="video/mp4" controls="true"></video>
                        </div>
                        </div>

            
      </div>
      </div>
      </div>
  );
}

export default HowtoUse;
