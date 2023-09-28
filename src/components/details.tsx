import React from "react";
import Address from "./address.tsx";
import Contact from "./contact-us.tsx";
import Info from "./info.tsx";

const Details = () => {
  return (
    <section className="details-section">
      <Info />
      <Address />
      <Contact />
    </section>
  );
};

export default Details;
