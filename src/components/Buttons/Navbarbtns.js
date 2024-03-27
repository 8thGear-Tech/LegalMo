// NavLoginbtn

import React from "react";

export const NavLoginbtn = (props) => {
  return (
    <div className="navBtn">
      <button type="button" className="btn btn-outline-primary btnNewText">
        {props.text}
      </button>
    </div>
  );
};

// NavSignUpbtn
export const NavSignUpbtn = () => {
  return (
    <div className="navBtn">
      <button type="button" className="btn btn-primary btnNewText">
        Sign Up
      </button>
    </div>
  );
};
