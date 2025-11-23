
import HeroFilter from "../../../components/UI/HeroFilter";
const Hero = () => {
  return (
    <>
<section className="hero-section rounded-2xl p-4 m-4 bg-gray-400 min-[85vh]: bg-[linear-gradient(to_right_bottom,rgba(49,84,44,0.8),rgba(16,71,52,0.8)),url(../assets/hero-img.jpg)] bg-no-repeat bg-center bg-cover">
        <h1>We Bring New Exprience Of Your Dream Property.</h1>
        <p>
          Helping you find your dream Home, One propery at a time. Your
          satisfaction is our Priority
        </p>
        <HeroFilter />
      </section>
    </>
  );
};

export default Hero;
