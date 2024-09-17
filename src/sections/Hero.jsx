// import { ArrowRight } from "../assets/icons";
// import { Button } from "../components/Button";
import { useState } from "react";
import { shoes, statistics } from "../constant";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  const [bigShoe, setBigshoe] = useState(bigShoe1);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section
      // data-aos="fade-up"
      id="home"
      className="w-full flex xl:flex-row justify-center flex-col
    min-h-screen gap-10 max-container"
    >
      <div className="flex justify-center items-start w-full flex-col  relative xl:w-2/5 max-xl:padding-x mt-6">
        <p className="text-coral-red font-montserrat text-xl">
          Our Summer Collection
        </p>
        <h1 className="mt-5 xl:mt-9 text-8xl max-sm:text-[72px] font-palanquin max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="inline-block text-coral-red mt-3">Nike</span> shoes
        </h1>
        <p className="text-lg mt-6 mb-14 text-slate-gray font-montserrat sm:max-w-sm">
          Discover stylish Nike arrival, quality comfort, and innovation for
          your life active
        </p>
        {/* <Button label="Shop now" /> */}
        <a href="https://www.nike.com/in/w/new-shoes-3n82yzy7ok">
          <button className="rounded-full px-7 py-4 border font-montserrat text-lg leading-none bg-black text-white border-black hover:shadow-lg shadow-slate-gray hover:bg-slate-gray hover:border-slate-gray transition-all duration-300 ">
            Shop now{" "}
            <span className="bg-white  rounded-full text-black hover:text-slate-gray w-5 h-5 px-1 ml-5">
              &rarr;
            </span>
          </button>
        </a>
        <div
          className="flex xl:ps-0
           justify-start items-start w-full flex-wrap mt-20 gap-16 max-sm:gap-14"
        >
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-palanquin text-4xl  font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex justify-center items-center flex-1 bg-primary max-xl:py-40 xl:min-h-screen bg-hero bg-cover bgce">
        <img
          data-aos="fade-left"
          src={bigShoe}
          alt="shoecollection"
          width={610}
          height={500}
          className="object-contain relative z-20 "
        />
        <div className="flex sm:gap-6 max-sm:gap-4 absolute -bottom-[6%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                bigShoeImg={bigShoe}
                changeBigShoeImage={(shoe) => {
                  setBigshoe(shoe);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
