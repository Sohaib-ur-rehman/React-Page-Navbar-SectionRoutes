import social from "./image/social.PNG";

import React, { Fragment } from "react";
export default () => (
  <Fragment>
    <div className="contact">
      <div className=" text-center">
        <h1>CONTACT ME</h1>
        <p>--------XXX---------</p>
        <p>I'LL BE GLAD TO ANSWER YOUR QUESTIONS!</p>
      </div>

      <form>
        <div className="form-group">
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Name"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="email address"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="subject"
          />
        </div>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Your message"
        ></textarea>
        <button type="submit" class="btn btn-primary">
          Send Message
        </button>

        <div className=" text-center">
          <h1>I AM SOCIAL</h1>
          <img src={social} alt="social pic" />
        </div>
      </form>
    </div>
  </Fragment>
);
