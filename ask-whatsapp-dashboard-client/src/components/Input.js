import React from "react";

function Input(props) {
  return (
    <div>
      <label for="cars">From:</label>

      <input type="month" name="from" onChange={(e) => props.handleChange(e)} />

      <label for="cars">To:</label>

      <input type="month" name="to" onChange={(e) => props.handleChange(e)} />

      <input
        type="button"
        value="Get Data"
        onClick={props.handleClick}
        className="btn btn-success"
      />
    </div>
  );
}

export default Input;
