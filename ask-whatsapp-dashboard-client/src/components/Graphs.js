import React, { Component } from "react";
import axios from "axios";

import Input from "./Input";
import FinancialGraph from "./FinancialGraph";

export default class Graphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      from: "",
      to: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    //console.log(this.state);
    if (this.props.match.params.searchoption === "Amount") {
      if (this.state.from && this.state.to) {
        axios
          .get(
            `http://localhost:5000/finance/amount/${this.state.from}&${this.state.to}`
          )
          .then((res) => {
            if (res.data.status) {
              alert(res.data.status);
              this.setState({ data: [] });
            } else {
              this.setState({ data: res.data });
            }

            //console.log(res.data);
          });
      } else {
        alert("please select all options");
      }
    } else {
      if (this.state.from && this.state.to) {
        axios
          .get(
            `http://localhost:5000/finance/count/${this.state.from}&${this.state.to}`
          )
          .then((res) => {
            if (res.data.status) {
              alert(res.data.status);
              this.setState({ data: [] });
            } else {
              this.setState({ data: res.data });
            }
            //console.log(res.data);
          });
      } else {
        alert("please select all options");
      }
    }

    // console.log(`/finance/${this.props.match.params.searchoption}?from=${this.state.from}-2020&to=${this.state.to}-2020`)
  };
  componentWillReceiveProps() {
    this.setState({ data: [] });
  }
  render() {
    const searchoption = this.props.match.params.searchoption;
    return (
      <div>
        <div className="graph-header">
          <h5>Financial Transactions {searchoption} Month Wise</h5>
        </div>
        <div className="graph-input">
          <Input
            handleChange={this.handleCChange}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
          />
        </div>
        <div className="graph-data">
          <FinancialGraph searchoption={searchoption} data={this.state.data} />
        </div>
      </div>
    );
  }
}
