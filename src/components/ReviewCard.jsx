import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, feedback, rating }) => {
  return (
    <div className="justify-center flex flex-col items-center">
      <img
        src={imgURL}
        alt="customer"
        className="w-[120px] h-[120px] rounded-full object-cover"
      />
      <p className="info-text mt-16 text-center max-w-sm">{feedback}</p>
      <div className="flex mt-3 justify-center items-center gap-2.5">
        <img src={star} className="object-contain m-0" width={24} height={24} />
        <p className="font-montserrat  text-xl  text-slate-gray">({rating})</p>
      </div>
      <p className="font-palanquin text-3xl font-bold mt-1 text-center">
        {customerName}
      </p>
    </div>
  );
};

export default ReviewCard;
