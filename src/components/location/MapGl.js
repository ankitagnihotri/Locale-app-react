import React, { Component } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  FlyToInterpolator
} from "react-map-gl";
import * as d3 from "d3";
import { TOKEN } from "../../constants/userConstants";

import CityPointer from "./CityPointer";

const fullscreenControlStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px"
};

class MapGl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        width: "87.5rem",
        height: "43.750rem",
        latitude: 12.99313,
        longitude: 77.59828,
        zoom: 11,
        transitionDuration: 3000,
        transitionInterpolator: new FlyToInterpolator(),
        transitionEasing: d3.easeCubic
      },
      popupInfo: null
    };
  }

  updateViewport = viewport => {
    this.setState({ viewport });
  };

  renderCityMarker = (location, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={Number(location.from_long)}
        latitude={Number(location.from_lat)}
        captureClick={true}
      >
        <CityPointer
          onClick={() => {
            const { viewport } = this.state;
            viewport.latitude = Number(location.from_lat);
            viewport.longitude = Number(location.from_long);
            viewport.zoom = 13;
            this.setState({ viewport, popupInfo: location });
          }}
        />
      </Marker>
    );
  };

  renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={Number(popupInfo.from_long)}
          latitude={Number(popupInfo.from_lat)}
          captureClick={true}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <div>
            <div>{`Marker at Point (${Number(popupInfo.from_long)}, ${Number(
              popupInfo.from_lat
            )})`}</div>
            <img width={300} src={popupInfo.image} alt="" />
          </div>
        </Popup>
      )
    );
  }

  render() {
    const { data } = this.props;
    return (
      <div className="main_content">
        <ReactMapGL
          mapboxApiAccessToken={TOKEN}
          {...this.state.viewport}
          mapStyle="mapbox://styles/mapbox/light-v9"
          // width="100%"
          // height="100%"
          onViewportChange={this.updateViewport}
        >
          {data ? data.slice(0, 1000).map(this.renderCityMarker) : null}
          {this.renderPopup()}

          <div className="fullscreen" style={fullscreenControlStyle}>
            <FullscreenControl />
          </div>

          <div className="nav" style={navStyle}>
            <NavigationControl onViewportChange={this.updateViewport} />
          </div>
        </ReactMapGL>
      </div>
    );
  }
}

export default MapGl;
