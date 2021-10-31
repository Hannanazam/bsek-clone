import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../asset/mystyle.css';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

function ImageSection() {
  return (
     <div className="img_section p-5">
     <div className="main_container">
     <div className="row">
     <div className="col-md-6">
        <img src="https://bsek.edu.pk/uploads/ixm21.JPG" width="400" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <img src="https://bsek.edu.pk/uploads/xm21.JPG" width="400" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <img src="https://bsek.edu.pk/uploads/ixgen.jpeg" width="400" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <img src="https://bsek.edu.pk/uploads/xgen.jpeg" width="400" className="img-fluid" />
      </div>
      </div>
      </div>
      </div>
  );
}

export default ImageSection;
