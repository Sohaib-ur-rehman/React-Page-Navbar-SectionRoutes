import React, { Fragment, useState } from "react";

import Navsohaib from "./navsohaib";
import Aboutsohaib from "../pages/aboutsohaib";
import Blogsohaib from "../pages/blogsohaib";
import Portfoliosohaib from "../pages/portfoliosohaib";
import Contactsohaib from "../pages/contactsohaib";

export default ({ children }) => {
  return (
    <Fragment>
      <Navsohaib />
      <div className="container-fluid">{children}</div>
      <Aboutsohaib />
      <Blogsohaib />
      <Portfoliosohaib />
      <Contactsohaib />
    </Fragment>
  );
};
