import { shoe8 } from "../assets/images";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SuperQuality = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section
      // data-aos="flip-left"
      id="about-us"
      className="flex justify-between items-center max-container max-lg:flex-col w-full gap-10"
    >
      <div className="flex flex-1 flex-col">
        <div>
          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            // data-aos="fade-right"
            className=" text-4xl font-palanquin capitalize lg:max-w-lg font-bold"
          >
            We Provide You <span className=" text-coral-red ">Super</span>
            <br />
            <span className=" text-coral-red ">Quality</span> Shoes
          </h2>
          <p data-aos="fade-right" className="mt-4 info-text lg:max-w-lg">
            Ensuring premium comfort and style, Our metriculously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p data-aos="fade-right" className="mt-4 info-text lg:max-w-lg">
            Our dedication to details and excellence ensures your satisfaction.
          </p>
        </div>
        <div className="mt-11">
          <button
            data-aos="zoom-in-up"
            className="rounded-full px-7 py-4  border font-montserrat text-lg leading-none bg-black text-white border-black hover:shadow-lg shadow-slate-gray hover:bg-slate-gray hover:border-slate-gray transition-all duration-300 "
          >
            View details
          </button>
        </div>
      </div>
      <div
        data-aos="flip-left"
        className="flex flex-1 justify-center items-center "
      >
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
