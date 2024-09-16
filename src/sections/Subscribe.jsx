import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Subscribe = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [description, setDesciption] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    setDesciption("");
  }

  return (
    <section
      data-aos="zoom-in-up"
      id="contact-us"
      className="flex justify-between items-center gap-10 max-container max-lg:flex-col"
    >
      <h3 className="lg:max-w-md font-bold font-palanquin leading-[68px] text-4xl">
        Sing Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="flex items-center gap-5 p-2.5 sm:border rounded-full sm:border-slate-gray w-full lg:w-[40%] max-sm:flex-col">
          <input
            type="text"
            placeholder="Subscribe@Nike.com"
            value={description}
            onChange={(e) => setDesciption(e.target.value)}
            className="input"
          />
          <div>
            <button
              onClick={handleSubmit}
              className="rounded-full px-7 py-4 border font-montserrat text-lg leading-none bg-black text-white border-black hover:shadow-lg shadow-slate-gray hover:bg-slate-gray hover:border-slate-gray transition-all duration-300 "
            >
              Subscribe Now{" "}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
