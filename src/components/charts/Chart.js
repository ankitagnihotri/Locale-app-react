import React from "react";
import Highcharts from "highcharts";
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  Legend,
  ColumnSeries
} from "react-jsx-highcharts";
import {
  checkDataMobileBooking,
  checkDataWebsiteBooking
} from "./../../utils/utils";

function Charts({ data }) {
  return (
    <div>
      <HighchartsChart>
        <Chart />
        <Title>
          Visualization of bookings done through Mobile and Webiste plotted on
          Time axis
        </Title>

        <Legend />

        <XAxis
          categories={[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]}
        />

        <YAxis>
          <ColumnSeries
            name="mobile-site-booking"
            data={checkDataMobileBooking(data)}
          />
          <ColumnSeries
            name="online-booking"
            data={checkDataWebsiteBooking(data)}
          />
        </YAxis>
      </HighchartsChart>
    </div>
  );
}

export default withHighcharts(Charts, Highcharts);
