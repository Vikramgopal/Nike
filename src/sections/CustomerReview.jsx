import { reviews } from "../constant";
import ReviewCard from "../components/ReviewCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CustomerReview = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section data-aos="zoom-in-up" className="max-container">
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
