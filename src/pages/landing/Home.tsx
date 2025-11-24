import HowItWorks from "./section/HowItWorks";
import Faqs from "./section/Faqs";
import Hero from "./section/Hero";
import AboutFeaturedHomeCard from "../../components/UI/AboutFeaturedHomeCard";
import ExploreOpportunities from "../../components/UI/ExploreOpportunities";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import CtaForm from "../../components/UI/CtaForm";
import HouseCard from "../../components/UI/HouseCard";
const Home = () => {
  return (
    <>
      {/* Hero section embebed with navbar for a sleek modern look */}
      <Hero />
      {/*  */}

      {/* ABOUT US SECTION */}
      <section className="about-section">
        <span className="text-blue-500">ABOUT</span>
        <div className="bg-gray-600 rounded-2xl p-4">
          <AboutFeaturedHomeCard />
        </div>
        <div className="text-center ">
          <h3 className="text-[clamp(1rem,5vw,2rem)]">
            We're your trusted partner in real estate.
            {" "}
            <br />
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
      </section>
      {/*  */}

      {/* HOW IT WORKS SECTION */}
      <HowItWorks />
      {/*  */}

      {/* EXPLORE SECTION */}
      <section className="explore-section mt-24">
        <span className="text-center">EXPLORE</span>
        <h1 className="font-bold text-4xl py-5 text-center">Explore our latest property</h1>
        <div className=" bg-gray-400 p-4">
          <div className="explore-container flex gap-4">
            <ExploreOpportunities />
            <HouseCard />
            <HouseCard />
            <HouseCard />
          </div>
        </div>
      </section>
      {/*  */}

      {/* TOP PICKS RENT PROPERTIES */}
      <section className="populer">
        <div className="flex justify-between ">
          <h1 className="font-bold text-4xl py-5">Top Picks Rent Propety</h1>
          <div className="flex">
            <IoArrowBackCircleOutline size={45} />
            <IoArrowForwardCircleOutline size={45} />
          </div>
        </div>

        <div className=" top-pick-container gap-4">
          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
        </div>
      </section>
      {/*  */}

      {/*Faqs section */}
      <Faqs />
      {/*  */}

      {/* CONTACT US SECTION */}
      <section className="contact-section p-4 bg-black text-gray-100 rounded-2xl">
        <div className="cta-home-container flex justify-between">
          <div className="cta-textual-content">
            <p>
              <span className="border-1 border-gr p-2 border-gray-400 rounded-3xl">
                Contact
              </span>
            </p>
            <h2>
              Still not sure where to start? <br />
              Contact us and fill the form.
            </h2>
            <p>Contact us and fill out the form, let us know what you need.</p>
            <div>
              <img src="" alt="" />
              <span className="text-yellow-300">4.5(10K Reviews)</span>
            </div>
          </div>
          <CtaForm />
        </div>
      </section>
      {/*  */}
    </>
  );
};

export default Home;
