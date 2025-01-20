import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import profiles from "../data/profiles.json";
import ProfileDetails from "../components/ProfileDetails";
import "./HomePage.css";

const HomePage = () => {
    return (
      <div className="home-page">
        <header className="header">
          <h1>Our Team</h1>
        </header>
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
        <footer className="footer">
          <p>© 2025 My Company. All rights reserved.</p>
        </footer>
      </div>
    );
  };
  
      
  

export default HomePage;
