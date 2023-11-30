import pic1 from "./image/pic1.PNG";
import slide11 from "./image/slide11.jpg";
import slide21 from "./image/slide21.jpg";
import slide31 from "./image/slide31.jpg";
import slide41 from "./image/slide41.jpg";

import React, { Fragment } from "react";
export default () => (
  <Fragment>
    <div className="row">
      <div className="col ">
        <img src={pic1} />
      </div>
    </div>

    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={slide11} alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={slide21} alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={slide31} alt="Third slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={slide41} alt="Third slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </Fragment>
);
