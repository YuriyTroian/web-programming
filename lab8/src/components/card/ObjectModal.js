import React from "react";
import styles from './objectModal.module.css';

function ObjectModal({ isOpen, onClose, title, strength, description, price, img }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={img} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>Strength: {strength}</p>
          <p>{description}</p>
          <p>Price: {price} $</p>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ObjectModal;
