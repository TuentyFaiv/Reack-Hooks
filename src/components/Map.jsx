import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const mapStyles = {
    height: "50vh",
    width: "100%"
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBsc6_sfg1gg3CB5qGQHycQZ_H6EoxY0V4">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={9}
        center={data}
      >
        <Marker position={data} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
