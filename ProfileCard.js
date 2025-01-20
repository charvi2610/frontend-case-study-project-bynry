import React, { useState } from "react";
import Modal from "react-modal";
import "./ProfileCard.css";

Modal.setAppElement("#root"); 

const ProfileCard = ({ profile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <p>{profile.address}</p>
      <button onClick={openModal}>View More Details</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>{profile.name}</h2>
        <p>{profile.details}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default ProfileCard;
