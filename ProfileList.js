import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileList = ({ profiles, onShowMap }) => {
  return (
    <div className="d-flex flex-wrap gap-3">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onShowMap={onShowMap}
        />
      ))}
    </div>
  );
};

export default ProfileList;
