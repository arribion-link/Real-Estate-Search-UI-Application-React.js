
import hero_image from "../../../assets/images/hero.png";
const Hero = () => {
  return (
    <>
      <section className="min-h-[70vh] bg-white p-4 rounded-2xl">
        <div className="flex justify-around items-center">
          <div>
            <h1 className="text-4xl font-bold">We Bring New Exprience Of Your Dream Property.</h1>
            <p className="text-gray-800">
              Helping you find your dream Home, One propery at a time. Your
              satisfaction is our Priority
            </p>
          </div>
          <div>
            <img src={hero_image} alt="" className="block max-[30em]:" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
