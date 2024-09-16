import { products } from "../constant";
import PopularProductCard from "../components/PopularProductCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PopularProduct = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section
      data-aos="fade-up"
      id="products"
      className="max-sm:mt-12  max-container"
    >
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> products
        </h1>
        <p className="font-montserrat mt-2 text-slate-gray lg:max-w-lg">
          Experience top notch-quality and style with our sought-after
          selection.Discover the world of confort, design, and value
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-4">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
