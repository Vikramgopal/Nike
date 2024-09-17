import { offer } from "../assets/images";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SpecialOffer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="flex justify-wrap  items-center max-xl:flex-col-reverse max-container gap-10">
      <div className="flex-1">
        <img
          data-aos="flip-right"
          src={offer}
          className="w-full object-contain"
          width={773}
          height={683}
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div>
          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            className=" text-4xl font-palanquin  capitalize lg:max-w-lg font-bold"
          >
            <span className=" text-coral-red ">Special</span> offer
          </h2>
          <p data-aos="fade-right" className="mt-4 info-text lg:max-w-lg">
            Embark on a shopping journey that redefines your experience with
            unbeatabke deals. From premier selections to incredible savings. we
            offer unparalleled value that sets us apart
          </p>
          <p data-aos="fade-right" className="mt-4 info-text lg:max-w-lg">
            Navigate a realm of possibilities designed to fulfill your unique
            desires., surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional{" "}
          </p>
        </div>
        <div className="mt-11 flex gap-4 flex-wrap">
          <a href="https://www.nike.com/in/">
            <button
              data-aos="fade-right"
              className="rounded-full px-7 py-4 border font-montserrat text-lg leading-none bg-black text-white border-black hover:shadow-lg shadow-slate-gray hover:bg-slate-gray hover:border-slate-gray transition-all duration-300 "
            >
              Shop now{" "}
              <span className="bg-white  rounded-full text-black hover:text-slate-gray w-5 h-5 px-1 ml-5">
                &rarr;
              </span>
            </button>
          </a>
          <a href="#">
            <button
              data-aos="zoom-in"
              className="rounded-full px-7 py-4  border font-montserrat text-lg leading-none bg-white text-slate-gray border-slate-gray hover:shadow-lg shadow-coral-red hover:bg-black hover:text-white hover:border-black transition-all duration-300 "
            >
              View details
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
