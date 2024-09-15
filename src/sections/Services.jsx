import { services } from "../constant";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className=" flex flex-wrap max-container justify-center gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
