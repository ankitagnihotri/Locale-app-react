import React, { PureComponent } from "react";

class CityPointer extends PureComponent {
  render() {
    const { onClick } = this.props;

    return (
      <i
        className="fa fa-map-marker"
        style={{ fontSize: "24px", color: "#0063c1" }}
        onClick={onClick}
      ></i>
    );
  }
}

export default CityPointer;
