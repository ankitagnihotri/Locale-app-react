import React, { Component } from "react";
import { Link } from "react-router-dom";

class UploadCsv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csv: undefined,
      csvUploadError: ""
    };
  }

  handleChange = event => {
    this.setState({
      csv: event.target.files[0],
      csvUploadError: ""
    });
  };

  handleSubmit = () => {
    this.setState({
      csvUploadError: "Choose file to continue"
    });
  };

  render() {
    return (
      <div className="app-container">
        <h2 id="logo" style={{ margin: "65px 0 50px", fontSize: "50px" }}>
          Locale.ai
        </h2>

        <div className="app-card">
          <h2>Upload the CSV File</h2>
          <div className="input-group">
            <div className="custom-file">
              <input
                type="file"
                ref={input => {
                  this.filesInput = input;
                }}
                class="file-custom"
                name="file"
                accept=".csv"
                icon="file text outline"
                onChange={this.handleChange}
              />
            </div>
          </div>
          {this.state.csv !== undefined ? (
            <Link to={{ pathname: "/home", state: { data: this.state.csv } }}>
              <button className="secondary">Continue</button>
            </Link>
          ) : (
            <button className="secondary" onClick={this.handleSubmit}>
              Continue
            </button>
          )}
          <p
            style={{
              color: "red",
              fontSize: "18px",
              margin: "40px 0"
            }}
          >
            {this.state.csvUploadError}
          </p>
        </div>
      </div>
    );
  }
}

export default UploadCsv;
