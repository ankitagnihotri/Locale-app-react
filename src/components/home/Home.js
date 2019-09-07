/*
 * @Author: Ankit Agnihotri
 * @Date: 2019-09-07 21:50:21
 * @Last Modified by:   Ankit Agnihotri
 * @Last Modified time: 2019-09-07 21:50:21
 */
import React, { Component } from "react";
import MapGl from "./../location/MapGl";
import PapaParse from "papaparse";
import { tableHeader } from "./../../utils/utils";
import Header from "./Header";
import Chart from "./../charts/Chart";
import LineChart from "./../charts/LineChart";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      header: []
    };
  }

  componentDidMount() {
    const { data } = this.props.location.state;
    PapaParse.parse(data, {
      config: {},
      before: this.before,
      error: this.onError,
      complete: this.onReadSuccess
    });
  }

  onError = (err, file, inputElem, reason) => {
    console.log("Inside Error", err);
  };

  before = (file, inputElem) => {
    console.log("Inside Before");
  };

  onReadSuccess = (results, file) => {
    const rideInfo = results.data.map(item => {
      return {
        id: item[0],
        user_id: item[1],
        vehicle_model_id: item[2],
        package_id: item[3],
        travel_type_id: item[4],
        from_area_id: item[5],
        to_area_id: item[6],
        from_city_id: item[7],
        to_city_id: item[8],
        from_date: item[9],
        to_date: item[10],
        online_booking: item[11],
        mobile_site_booking: item[12],
        booking_created: item[13],
        from_lat: item[14],
        from_long: item[15],
        to_lat: item[16],
        to_long: item[17],
        Car_Cancellation: item[18]
      };
    });

    const headerInfo = rideInfo[0];

    this.setState({
      header: tableHeader(headerInfo),
      data: rideInfo.slice(1, rideInfo.length)
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Header data={data} />
        <section className="hero-section grey">
          <div className="hero-section-container">
            <div>
              <h1>Longitude & Latitude points on Map</h1>
              <MapGl data={data} />
            </div>
          </div>
        </section>
        <section className="hero-section grey">
          <div style={{ paddingRight: "40px", paddingLeft: "40px" }}>
            <h1> Visualization of bookings</h1>
            <Chart data={data} />
          </div>
        </section>
        <section className="hero-section grey">
          <div style={{ paddingRight: "40px", paddingLeft: "40px" }}>
            <LineChart data={data} />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
