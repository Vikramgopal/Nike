import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-container max-lg:flex-col w-full gap-10"
    >
      <div className="flex flex-1 flex-col">
        <h2 className=" text-4xl font-palanquin capitalize lg:max-w-lg font-bold">
          We Provide You <span className=" text-coral-red ">Super</span>
          <br />
          <span className=" text-coral-red ">Quality</span> Shoes
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          Ensuring premium comfort and style, Our metriculously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-4 info-text lg:max-w-lg">
          Our dedication to details and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <button className="rounded-full px-7 py-4  border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red hover:shadow-lg shadow-coral-red hover:bg-red-500 transition-all duration-300 ">
            View details
          </button>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center ">
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
