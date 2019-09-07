/*
 * @Author: Ankit Agnihotri 
 * @Date: 2019-09-07 21:51:11 
 * @Last Modified by:   Ankit Agnihotri 
 * @Last Modified time: 2019-09-07 21:51:11 
 */
import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import UploadCsv from "./UploadCsv";

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  filterMethod = (filter, row, column) => {
    const id = filter.pivotId || filter.id;
    return row[id] !== undefined
      ? String(row[id].toString().toLowerCase()).startsWith(
          filter.value.toLowerCase()
        )
      : true;
  };

  render() {
    const columns = [
      // {
      //   Header: "ID",
      //   accessor: "id"
      // },
      {
        Header: "User ID",
        accessor: "user_id"
      },
      {
        Header: "vehicle ID",
        accessor: "vehicle_model_id"
      },
      {
        Header: "Package ID",
        accessor: "package_id"
      },
      {
        Header: "Travel Type ID",
        accessor: "travel_type_id"
      },
      {
        Header: "From Area ID",
        accessor: "from_area_id"
      },
      {
        Header: "To Area ID",
        accessor: "to_area_id"
      },
      {
        Header: "From City ID",
        accessor: "from_city_id"
      },
      {
        Header: "To City ID",
        accessor: "to_city_id"
      },
      {
        Header: "From Date",
        accessor: "from_date"
      },
      {
        Header: "To Date",
        accessor: "to_date"
      },
      {
        Header: "Online Booking",
        accessor: "online_booking"
      },
      {
        Header: "Mobile Site Booking",
        accessor: "mobile_site_booking"
      },
      {
        Header: "Booking Created",
        accessor: "booking_created"
      },
      {
        Header: "From Longitude",
        accessor: "from_lat"
      },
      {
        Header: "From Latitude",
        accessor: "from_long"
      },
      {
        Header: "To Latitude",
        accessor: "to_lat"
      },
      {
        Header: "To Longitude",
        accessor: "to_long"
      },
      {
        Header: "Car Cancellation",
        accessor: "Car_Cancellation"
      }
    ];

    const { tableData } = this.props;
    console.log(tableData);

    return (
      <>
        <ReactTable
          className="data-table"
          data={tableData}
          filterable
          defaultFilterMethod={this.filterMethod}
          pageSizeOptions={[5, 10, 20, 25, 50]}
          defaultPageSize={20}
          columns={columns}
          style={{ textAlign: "center" }}
        />
      </>
    );
  }
}

export default TableData;
