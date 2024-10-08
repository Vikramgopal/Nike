const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? `border-coral-red`
          : `border-transparent`
      } cursor-pointer max-sm=flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card overflow-hidden bg-center bg-cover max-sm:p-4 sm:w-40 sm:h-40  rounded-xl">
        <img
          src={imgURL.thumbnail}
          alt="shoes collection"
          width={127}
          height={103}
          className="object-contain hover:scale-[120%] transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
