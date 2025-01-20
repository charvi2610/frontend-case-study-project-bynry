import React, { useState } from "react";
import MapComponent from "./MapComponent";
const ProfileDetails = ({ profile }) => {
    const [showSummary, setShowSummary] = useState(false);

    const toggleSummary = () => setShowSummary(!showSummary);

    return (
        <div>
            <h2>{profile.name}</h2>
            <p>{profile.details}</p>

            
            <MapComponent address={profile.address} />

        
            <button onClick={toggleSummary} style={{ marginTop: "10px" }}>
                {showSummary ? "Hide Summary" : "Show Summary"}
            </button>

            
            {showSummary && (
                <div>
                    <h4>Location Summary</h4>
                    <p>{profile.address}</p>
                </div>
            )}
        </div>
    );
};

export default ProfileDetails;
