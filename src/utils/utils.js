/*
 * @Author: Ankit Agnihotri 
 * @Date: 2019-09-07 21:51:20 
 * @Last Modified by:   Ankit Agnihotri 
 * @Last Modified time: 2019-09-07 21:51:20 
 */
export const tableHeader = headerInfo => {
  const header = [
    {
      id: headerInfo.id,
      label: "Id"
    },
    {
      id: headerInfo.user_id,
      label: "User Id"
    },
    {
      id: headerInfo.vehicle_model_id,
      label: "vehicle Id"
    },
    {
      id: headerInfo.package_id,
      label: "Package Id"
    },
    {
      id: headerInfo.travel_type_id,
      label: "Travel Type Id"
    },
    {
      id: headerInfo.from_area_id,
      label: "From Area Id"
    },
    {
      id: headerInfo.to_area_id,
      label: "To Area Id"
    },
    {
      id: headerInfo.from_city_id,
      label: "From City Id"
    },
    {
      id: headerInfo.to_city_id,
      label: "To City Id"
    },
    {
      id: headerInfo.from_date,
      label: "From Date"
    },
    {
      id: headerInfo.to_date,
      label: "To Date"
    },
    {
      id: headerInfo.online_booking,
      label: "Online Booking"
    },
    {
      id: headerInfo.mobile_site_booking,
      label: "Mobile Site Booking"
    },
    {
      id: headerInfo.booking_created,
      label: "Booking Created"
    },
    {
      id: headerInfo.from_lat,
      label: "From Latitude"
    },
    {
      id: headerInfo.from_long,
      label: "From Longitude"
    },
    {
      id: headerInfo.to_lat,
      label: "To Latitude"
    },
    {
      id: headerInfo.to_long,
      label: "To Longitude"
    },
    {
      id: headerInfo.Car_Cancellation,
      label: "Car Cancellation"
    }
  ];
  return header;
};

export const checkDataMobileBooking = data => {
  // const booking = () => data.filter(item => item.mobile_site_booking === 1);
  const booking = data.map(item => item.mobile_site_booking);
  const date = data.map(item => item.booking_created);
  var janCount = 0;
  let febCount = 0;
  let marCount = 0;
  let aprCount = 0;
  let mayCount = 0;
  let junCount = 0;
  let julCount = 0;
  let augCount = 0;
  let sepCount = 0;
  let octCount = 0;
  let novCount = 0;
  let decCount = 0;

  for (let i = 0; i <= data.length; i++) {
    let month = new Date(date[i] + 1);
    if (month.getMonth() === 1 && booking[i] === "1") {
      janCount = janCount + 1;
    } else if (month.getMonth() === 2 && booking[i] === "1") {
      febCount = febCount + 1;
    } else if (month.getMonth() === 3 && booking[i] === "1") {
      marCount = marCount + 1;
    } else if (month.getMonth() === 4 && booking[i] === "1") {
      aprCount = aprCount + 1;
    } else if (month.getMonth() === 5 && booking[i] === "1") {
      mayCount = mayCount + 1;
    } else if (month.getMonth() === 6 && booking[i] === "1") {
      junCount = junCount + 1;
    } else if (month.getMonth() === 7 && booking[i] === "1") {
      julCount = julCount + 1;
    } else if (month.getMonth() === 8 && booking[i] === "1") {
      augCount = augCount + 1;
    } else if (month.getMonth() === 9 && booking[i] === "1") {
      sepCount = sepCount + 1;
    } else if (month.getMonth() === 10 && booking[i] === "1") {
      octCount = octCount + 1;
    } else if (month.getMonth() === 11 && booking[i] === "1") {
      novCount = novCount + 1;
    } else if (month.getMonth() === 12 && booking[i] === "1") {
      decCount = decCount + 1;
    }
  }
  return [
    janCount,
    febCount,
    marCount,
    aprCount,
    mayCount,
    junCount,
    julCount,
    augCount,
    sepCount,
    octCount,
    novCount,
    decCount
  ];
};

export const checkDataWebsiteBooking = data => {
  const booking = data.map(item => item.online_booking);
  const date = data.map(item => item.booking_created);
  var janCount = 0;
  let febCount = 0;
  let marCount = 0;
  let aprCount = 0;
  let mayCount = 0;
  let junCount = 0;
  let julCount = 0;
  let augCount = 0;
  let sepCount = 0;
  let octCount = 0;
  let novCount = 0;
  let decCount = 0;

  for (let i = 0; i <= data.length; i++) {
    let month = new Date(date[i] + 1);
    if (month.getMonth() === 1 && booking[i] === "1") {
      janCount = janCount + 1;
    } else if (month.getMonth() === 2 && booking[i] === "1") {
      febCount = febCount + 1;
    } else if (month.getMonth() === 3 && booking[i] === "1") {
      marCount = marCount + 1;
    } else if (month.getMonth() === 4 && booking[i] === "1") {
      aprCount = aprCount + 1;
    } else if (month.getMonth() === 5 && booking[i] === "1") {
      mayCount = mayCount + 1;
    } else if (month.getMonth() === 6 && booking[i] === "1") {
      junCount = junCount + 1;
    } else if (month.getMonth() === 7 && booking[i] === "1") {
      julCount = julCount + 1;
    } else if (month.getMonth() === 8 && booking[i] === "1") {
      augCount = augCount + 1;
    } else if (month.getMonth() === 9 && booking[i] === "1") {
      sepCount = sepCount + 1;
    } else if (month.getMonth() === 10 && booking[i] === "1") {
      octCount = octCount + 1;
    } else if (month.getMonth() === 11 && booking[i] === "1") {
      novCount = novCount + 1;
    } else if (month.getMonth() === 12 && booking[i] === "1") {
      decCount = decCount + 1;
    }
  }
  return [
    janCount,
    febCount,
    marCount,
    aprCount,
    mayCount,
    junCount,
    julCount,
    augCount,
    sepCount,
    octCount,
    novCount,
    decCount
  ];
};
