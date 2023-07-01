import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const MapView = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 49.2827,
    longitude: -123.1207,
    zoom: 10,
  });

  return (
    <div className="w-3/5 max-h-fit mb-4">
      <ReactMapGL
        mapStyle="mapbox://styles/jacob0882/cliui4lmh00cw01pwc350f7n9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        {...viewport}
      >
        <Marker latitude={37.7577} longitude={-122.4376}>
          <div className="text-blue-500">This is Marker</div>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default MapView;
