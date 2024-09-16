import { services } from "../constant";
import ServiceCard from "../components/ServiceCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section
      data-aos="fade-down"
      className=" flex flex-wrap max-container justify-center gap-9"
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
