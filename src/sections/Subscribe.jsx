const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex justify-between items-center gap-10 max-container max-lg:flex-col"
    >
      <h3 className="lg:max-w-md font-bold font-palanquin leading-[68px] text-4xl">
        Sing Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className="flex items-center gap-5 p-2.5 sm:border rounded-full sm:border-slate-gray w-full lg:w-[40%] max-sm:flex-col">
        <input type="text" placeholder="Subscribe@Nike.com" className="input" />
        <div>
          <button className="rounded-full px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red hover:shadow-lg shadow-coral-red hover:bg-red-500 transition-all duration-300 ">
            Subscribe Now{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
