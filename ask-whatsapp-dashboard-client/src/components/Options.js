import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Options extends Component {
  render() {
    return (
      <div>
        <Link to="/Amount" className="router-link btn  btn-secondary btn-block">
          Month wise Amount Report
        </Link>
        <Link to="/Count" className="router-link btn  btn-secondary btn-block">
           Month wise Count Report
        </Link>
      </div>
    );
  }
}
