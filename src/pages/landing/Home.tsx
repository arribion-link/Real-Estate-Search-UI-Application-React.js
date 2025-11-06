import HowItWorks from "./section/HowItWorks";
import Faqs from "./section/Faqs";
import Hero from "./section/Hero";
import AboutFeaturedHomeCard from "../../components/UI/AboutFeaturedHomeCard";
import ExploreOpportunities from "../../components/UI/ExploreOpportunities";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import CtaForm from "../../components/UI/CtaForm";
const Home = () => {
  return (
    <>
      {/* Hero section embebed with navbar for a sleek modern look */}
      <Hero />
      {/*  */}

      {/* ABOUT US SECTION */}
      <section className="about-section">
        <div className="about-us-text-content">
          <span>ABOUT</span>
          <h3 className="text-[clamp(1rem,5vw,3rem)]">
            We're your trusted partner in real estate.{" "}
            <span className="text-gray-300">
              {" "}
              With 10years of experience in Kenya, our team of experts is{" "}
            </span>{" "}
            dedicated to providing personalized service and achieving the best
            possible results.{" "}
            <span className="text-gray-300">
              {" "}
              From finding your dream home to selling your property at the right
              price,
            </span>
            we're here to guide you every step of the way
          </h3>
        </div>
        <div className="about-carosel-section">
          <AboutFeaturedHomeCard />
        </div>
      </section>
      {/*  */}

      {/* HOW IT WORKS SECTION */}
      <HowItWorks />
      {/*  */}

      {/* EXPLORE SECTION */}
      <section className="explore-section mt-24 bg-gray-400 p-4">
        <div className="explore-container">
          <ExploreOpportunities />
        </div>
      </section>
      {/*  */}

      {/* TOP PICKS RENT PROPERTIES */}
      <section className="populer">
        <div className="flex justify-between ">
          <h1>Top Picks Rent Propety</h1>
          <div className="flex">
            <IoArrowBackCircleOutline size={45} />
            <IoArrowForwardCircleOutline size={45} />
          </div>
        </div>
      </section>
      {/*  */}

      {/*Faqs section */}
      <Faqs />
      {/*  */}

      {/* CONTACT US SECTION */}
      <section className="contact-section p-4 bg-black text-gray-100 rounded-2xl">
        <div className="flex justify-between">
          <div>
            <span className="border-2 border-gr p-2 border-gray-400 rounded-3xl">Contact</span>
            <h2>
              Still not sure where to start? <br />
              Contact us  and fill the form.
            </h2>
            <p>
              Contact us and fill out the form, let us know what you need.
            </p>
            <div>
              <img src="" alt="" />
              <p>4.5(10K Reviews)</p>
            </div>
          </div>
          <CtaForm/>
        </div>
      </section>
      {/*  */}
    </>
  );
};

export default Home;
