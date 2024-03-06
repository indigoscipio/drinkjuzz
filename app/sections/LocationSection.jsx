import React from "react";

const LocationSection = () => {
  return (
    <section className="location-section">
      <div className="container mx-auto">
        <div className="location__content">
          <div className="location__text">
            <h2>Our Location</h2>
            <h3>Toko Kue 48</h3>
            <p>Jl. Rumah Sakit Umum No. 48, Tasikmalya, Empangsari 46113</p>
            <button>Get Directions</button>
          </div>
        </div>
        <div className="location__map">
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
