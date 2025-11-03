import HowItWorks from "../section/HowItWorks";
import Faqs from "../section/Faqs";
import Hero from "../section/Hero";
const Home = () => {
  return (
    <>
      {/* Hero section embebed with navbar for a sleek modern look */}
      <Hero />

      {/* ABOUT US SECTION */}

      <section className="about-section">
        <div className="about-us-text-content">
          <span>ABOUT</span>
          <h3>
            We're your trusted partner in real estate. With 10years of
            experience in Kenya, our team of experts is dedicated to providing
            personalized service and achieving the best possible results. From
            finding your dream home to selling your property at the right price,
            we're here to guide you every step of the way
          </h3>
        </div>
        <div className="about-us-image-section"></div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <HowItWorks />

      <section className="explore-section"></section>
      <section className="populer"></section>

      {/*Faqs section */}
      <Faqs />
      <section className="contact-section"></section>
    </>
  );
};

export default Home;
