import blog1 from "./image/blog/blog1.jpg";
import blog2 from "./image/blog/blog21.jpg";
import blog3 from "./image/blog/blog31.jpg";

import React, { Fragment } from "react";
export default () => (
  <Fragment>
    <div className=" text-center">
      <h1>MY BLOG</h1>
      <p>--------XXX---------</p>
      <p>NEWS FROM MY HOUSE</p>
    </div>

    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={blog1} alt="" />

          <div className="card-body">
            <p className="card-text">
              The Magic Wheel JULY 28, 2014 // ADMIN // FUN, TRAVEL, TRENDS
            </p>
            <p className="card-text">
              It’s not it to understand them in the objects we’re playing.
              Products fulfilling a product more innovative, bullets grunts,
              powerful or stay at every multivariate spacetime point of
              analysis. People have enormous serial correlation. Good design is
              derived from so deep and then there’s no other product useful.
              (MORE…)
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={blog2} alt="" />
          <div className="card-body">
            <p className="card-text">
              The lonely road JULY 28, 2014 // ADMIN // FUN, TRAVEL, TRENDS, WEB
              DESIGN
            </p>
          </div>

          <p>
            {" "}
            If you’ve studied design at all, you’ve probably encountered Lorem
            Ipsum placeholder text at some point. Anywhere there is text, but
            the meaning of that text isn’t particularly important, you might see
            Lorem Ipsum. (MORE…)
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={blog3} alt="" />
          <div className="card-body">
            <p className="card-text">
              I love gasoline smell JULY 28, 2014 // ADMIN // FUN, TRENDS, WEB
              DESIGN
            </p>
            <p className="card-text">
              Many of the content, and often about their precious turfpossessed
              selves and principles are shortcomings of seeing and colors to
              cover up a paucity of design. Zero out your interface. I think
              that are deep and profound indeed, these tasks and showing.
              (MORE…)
            </p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
