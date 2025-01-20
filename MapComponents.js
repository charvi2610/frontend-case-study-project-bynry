import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapComponent = ({ address, google }) => {
    const mapStyles = {
        width: "100%",
        height: "400px",
    };

    // Default location (if address is unavailable)
    const defaultCoords = {
        lat: 40.712776, // Example coordinates (New York)
        lng: -74.005974,
    };

    return (
        <div style={{ marginTop: "20px" }}>
            <h3>Location on Map</h3>
            <Map
                google={google}
                zoom={15}
                style={mapStyles}
                initialCenter={defaultCoords}
            >
                <Marker position={defaultCoords} />
            </Map>
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyB1m6I7r9VH_C3z_q601DUuLChdN2u3iqM", 
})(MapComponent);
