import React from "react";

export default function MapPicker({ onClose, onConfirm }) {
  return (
    <div className="mapBox">
      <h3>Select Location</h3>

      <iframe
        title="map"
        width="100%"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://maps.google.com/maps?q=chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
      />

      <button onClick={() => onConfirm("Chennai")}>Confirm</button>
      <button className="closeBtn" onClick={onClose}>Close</button>
    </div>
  );
}
