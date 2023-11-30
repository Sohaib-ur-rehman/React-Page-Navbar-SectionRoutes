import port1 from "./image/portfolio/port1.PNG";
import port2 from "./image/portfolio/port2.PNG";
import port3 from "./image/portfolio/port3.PNG";
import port4 from "./image/portfolio/port4.PNG";
import port5 from "./image/portfolio/port5.PNG";
import port6 from "./image/portfolio/port6.PNG";
import port7 from "./image/portfolio/port7.PNG";
import port8 from "./image/portfolio/port8.PNG";

import React, { Fragment } from "react";
export default () => (
  <Fragment>
    <div className=" text-center">
      <h1>PORTFOLIO</h1>
      <p>--------XXX---------</p>
      <p>SIMPLICITY IS THE ULTIMATE SOPHISTICATION</p>
    </div>
    <p>Filter By</p>
    <button>design</button>
    <button>design</button>
    <button>logo</button>
    <button>photography</button>
    <button>poster</button>
    <button>resources</button>
    <button>retro</button>
    <button>T-shirts</button>
    <button>videos</button>

    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={port1} alt="" />

          <div className="card-body">
            <p className="card-text">IMAGES GALLERIES ARE FUNNY</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={port2} alt="" />
          <div className="card-body">
            <p className="card-text">A VIMEO REEL</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={port3} alt="" />
          <div className="card-body">
            <p className="card-text">LOVE FOR OLD CAMERAS</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={port4} alt="" />
          <div className="card-body">
            <p className="card-text">DETAILED PROJECT PAGE</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={port5} alt="" />
          <div className="card-body">
            <p className="card-text">YOUTUBE VIDEO</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={port6} alt="" />
          <div className="card-body">
            <p className="card-text">ANOTHER EXTERNAL LINK</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={port7} alt="" />
          <div className="card-body">
            <p className="card-text">A LIGHTBOX IMAGE</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={port8} alt="" />
          <div className="card-body">
            <p className="card-text">THE GALLERY</p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
