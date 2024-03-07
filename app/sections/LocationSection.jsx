"use client";
import React from "react";
import GoogleMapComponent from "../components/Map";
import Link from "next/link";

const LocationSection = () => {
  return (
    <section id="location-section" className="location-section mx-4">
      <div className="container-border-radius p-4 py-16 container mx-auto bg-violet-100">
        <div className="location__content flex flex-col md:items-center md:flex-row">
          <div className="md:px-16 gap-6 flex flex-col items-start pl-0 basis-1/2 location__text mb-4">
            <h2 className="font-black text-3xl md:text-4xl text-lime-800">
              Our Location
            </h2>
            <h3 className="font-bold text-xl text-slate-600">Toko Kue 48</h3>
            <p className="font-semibold text-lg text-slate-600">
              Jl. Rumah Sakit Umum No. 48, Tasikmalya, Empangsari 46113
            </p>
            <button className="btn-primary-violet">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://maps.app.goo.gl/r8hn8d4x5PbxegMj8"
              >
                Get Directions
              </Link>{" "}
            </button>
          </div>

          <div className="basis-1/2 location__map">
            <GoogleMapComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
