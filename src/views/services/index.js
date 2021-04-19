import React from "react";
import Footer from "../../components/app-components/footer/index.js";
import ServicePlan from "../../components/app-components/service-plan/index.js";
import "./styles.css";
function Services() {
  return (
    <div>
      <div className="service--container">
        <ServicePlan />
        <ServicePlan />
        <ServicePlan />
      </div>

      <Footer />
    </div>
  );
}

export default Services;
