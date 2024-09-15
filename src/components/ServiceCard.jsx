const ServiceCard = ({ label, subtext, imgURL }) => {
  return (
    <div className="flex-1 px-10 py-16 w-full sm:min-w-[350px] rounded-[20px] sm:w-[350px] hover:shadow-3xl transition-all duration-300">
      <div className="bg-coral-red w-11 h-11 flex rounded-full justify-center items-center">
        <img src={imgURL} alt={label} />
      </div>
      <h3 className="font-palanquin font-bold text-3xl leading-normal mt-5">
        {label}
      </h3>
      <p className="word-breaks mt-3 leading-normal text-lg font-montserrat">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
