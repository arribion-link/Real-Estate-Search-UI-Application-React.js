import NavBar from "../components/Partials/NavBar"
import HeroFilter from "../components/UI/HeroFilter"
const Hero = () => {
  return (
      <>
        <section className="hero-section">
            <NavBar />
            <h1>We Bring New Exprience Of Your Dream Property.</h1>
            <p>
                Helping you find your dream Home,
                One propery at a time.
                Your satisfaction is our Priority
        </p>
        <HeroFilter/>
        </section>
    </>
  )
}

export default Hero
