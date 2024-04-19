import React from "react";
import { Link } from "react-router-dom";

const Heading = (props) => {
  return (
    <div>
      <div className="heading-section mb-5">
        <div className="container">
          <div>
            <Link>{props.subtitle}</Link>/<Link>{props.subtitle2}</Link>
          </div>
          <h2 className="display-5">{props.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Heading;
