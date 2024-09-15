import { reviews } from "../constant";
import ReviewCard from "../components/ReviewCard";

const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="text-center text-4xl font-palanquin font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        say?
      </h3>
      <p className="mt-4 m-auto info-text text-center max-w-lg">
        Here geniun stories from our satisfied customers about our exceptional
        experience with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            {...review}
            //   rating={review.rating}
            //   imgURL={review.imgURL}
            //   feedback={review.feedback}
            //   customerName={review.customerName}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
