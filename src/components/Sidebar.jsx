import React, { useState } from "react";
import Modal from "react-modal";
import {GrClose} from 'react-icons/gr'

const Sidebar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <>
      <div className="sidebar">
        <h5>
          Brand <b>Colors</b>
        </h5>
        <p>
          The biggest collection of official brand color codes around. Curated
          by @brandcolors and friends.
        </p>
        <a onClick={toggleModal}>About BrandColors</a>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-modal"
        overlayClassName="about-modal-overlay"
        contentLabel="Example Modal"
      >
        <button onClick={toggleModal} className="modal-close-btn">
        <GrClose />
        </button>
        <h4>About BrandColors</h4>
        <p>
          BrandColors was created by DesignBombs. The goal was to create a
          helpful reference for the brand color codes that are needed most
          often.
        </p>
        <p>
          It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot,
          Tuts+, and over 2 million pageviews. There are now over 600 brands
          with 1600 colors and the collection is always growing.
        </p>
      </Modal>
    </>
  );
};

export default Sidebar;
