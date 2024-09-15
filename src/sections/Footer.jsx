import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constant";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-wrap justify-between items-start gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            {" "}
            <img src={footerLogo} alt="Nike" width={150} height={47} />
          </a>
          <p className="text-base font-montserrat leading-7 sm:max-w-sm text-white-400 mt-6">
            Get shoes ready for the new term and your nearest NIke store. Find
            Your perfect Size in the Store. Get rewards.{" "}
          </p>
          <div className="flex mt-8 gap-5 items-center">
            {socialMedia.map((social) => (
              <a href={social.href} key={social.src}>
                <div className="bg-white rounded-full flex justify-center items-center w-12 h-12">
                  <img
                    src={social.src}
                    alt="social.alt"
                    width={24}
                    height={24}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="flex lg:gap-10 gap-20 flex-wrap flex-1">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat leading-normal text-2xl font-medium">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="text-white-400 cursor-pointer font-montserrat mt-3 leading-normal hover:text-slate-gray text-base"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between max-sm:flex-col max-sm:items-center text-white-400 mt-24">
        <div className="flex justify-start items-center gap-2 cursor-pointer  flex-1 font-montserrat">
          <img
            src={copyrightSign}
            alt="copy right sign"
            className="rounded-full m-0 "
            height={20}
            width={20}
          />
          <p>Copyright , All Rights Reserved</p>
        </div>
        <p className="cursor-pointer hover:text-slate-gray font-montserrat">
          Terms & Condition
        </p>
      </div>
    </footer>
  );
};

export default Footer;
