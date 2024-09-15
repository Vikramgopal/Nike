import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, href }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <div className="hover:scale-[108%] cursor-pointer transition-all duration-300 overflow-hidden">
        <a href={href}>
          <img src={imgURL} alt={name} className="w-[280px] h-[280px] " />
        </a>
      </div>
      <div className="flex justify-start mt-8  gap-2.5">
        <img src={star} alt="rating" width={24} height={24}></img>
        <div className="text-slate-gray font-montserrat text-xl leading-normal ">
          (4.5)
        </div>
      </div>
      <h3 className="font-palanquin leading-normal mt-2 font-semibold text-2xl">
        {name}
      </h3>
      <p className="font-montserrat text-coral-red mt-2 leading-normal font-semibold text-2xl">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
