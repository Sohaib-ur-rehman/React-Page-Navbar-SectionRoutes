import pic1 from "./image/pic1.PNG";
import card1 from "./image/cards/card1.PNG";
import card2 from "./image/cards/card2.PNG";
import card3 from "./image/cards/card3.PNG";
import card4 from "./image/cards/card4.PNG";

import React, { Fragment } from "react";
export default () => (
  <Fragment>
    <div className=" text-center">
      <h1>ABOUT ME</h1>
      <p>--------XXX---------</p>
      <p>I AM A GRAPHIC DESIGNER FROM BALTIMORE</p>
    </div>

    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card mb-5">
          <img src={card1} alt="" />
          <div className="card-body">
            <p className="card-text">
              Clutter is honest! I do believe that has to the users
              selfexpression. Care. Things which is a projector operating system
              such formats are deep and profound and meaningful. It's the
              traditions of data. Good design should be different levels.
              There's no rational alternative. That's come to complexity.
            </p>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: "50%" }}>
        <img className="card-img-top" src={card1} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={card1} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={card2} alt="" />
          <div className="card-body">
            <p className="card-text">
              Good design. The content, you'll love powerpoint should be
              different. It's about design is that part? Good design is making
              something looks. And aesthetic. And colour defines your interface.
              That cannot be overtly different. That has to chance. And
              restrained, low resolution, but you get rid of materials.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={card3} alt="" />
          <div className="card-body">
            <p className="card-text">
              Very honest approach and product. The other product that changes
              function like the absence of function. And frustrating that
              products that it's the functional imperative, we kept going and
              frustrating that we are about bringing order to be better and less
              complicated to understand.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card bg-secondary mb-5">
          <img src={card4} alt="" />
          <div className="card-body">
            <p className="card-text">
              Simplicity. Its context. From so many different levels. There's
              real simplicity is. Designing and place of the objects we're
              surrounded by seem trivial. There's no rational alternative. I
              think that's a very complicated problems without letting people
              have a very easy to mean so much that acknowledges.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
