import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about-us", label: "About Us" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Air Jordan 1 Low Quai 54",
    price: "MRP : ₹ 12 795.00",
    href: "https://www.nike.com/in/t/air-jordan-1-low-quai-54-shoes-FmKDX1/HQ0764-001",
  },
  {
    imgURL: shoe5,
    name: "Air Jordan 1 Zoom CMFT 2",
    price: "MRP : ₹ 13 295.00",
    href: "https://www.nike.com/in/t/air-jordan-1-zoom-cmft-2-shoes-nX8Qqx/DV1307-406",
  },
  {
    imgURL: shoe6,
    name: "Air Jordan 1 Mid SE",
    price: "MRP : ₹ 12 295.00",
    href: "https://www.nike.com/in/t/air-jordan-1-mid-se-shoes-7Z9gTq/FJ3448-001",
  },
  {
    imgURL: shoe7,
    name: "Air Jordan 1 Low SE Craft",
    price: "MRP : ₹ 8 295.00",
    href: "https://www.nike.com/in/t/air-jordan-1-low-se-craft-older-shoes-ZcCzsX/FQ7757-001",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  {
    src: facebook,
    alt: "facebook logo",
    href: "https://www.facebook.com/nike",
  },
  {
    src: twitter,
    alt: "twitter logo",
    href: "https://twitter.com/Nike?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
  },
  {
    src: instagram,
    alt: "instagram logo",
    href: "https://www.instagram.com/nike",
  },
];
