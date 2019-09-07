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
  LineSeries
} from "react-jsx-highcharts";
import {
  checkDataMobileBooking,
  checkDataWebsiteBooking
} from "./../../utils/utils";

function LineChart({ data }) {
  return (
    <div>
      <HighchartsChart>
        <Chart />
        <Title>
          Comparison between Mobile and Website booking through Line Chart
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
          <LineSeries
            name="mobile-site-booking"
            data={checkDataMobileBooking(data)}
          />
          <LineSeries
            name="online-booking"
            data={checkDataWebsiteBooking(data)}
          />
        </YAxis>
      </HighchartsChart>
    </div>
  );
}

export default withHighcharts(LineChart, Highcharts);
