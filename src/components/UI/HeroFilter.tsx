import usersImage from "../../assets/users.png"

const HeroFilter = () => {
  return (
    <div>
      <div className="hero-filter-container">
        <div className="hero-filter-header">
          <div>
            <button>
              <span>Rent</span>
              <span>Buy</span>
            </button>
          </div>
          <div>
            <img src={usersImage} alt="" />
          </div>
        </div>
        <div className="filter-sections">
          <div>
            <h2>Loacation</h2>
            <select name="" id="">
              <option value="">kutus</option>
              <option value="">kutus</option>
              <option value="">kutus</option>
              <option value="">kutus</option>
            </select>
          </div>
          <div>
            <h2>Type</h2>
            <select name="" id="">
              <option value="">kutus</option>
              <option value="">kutus</option>
              <option value="">kutus</option>
              <option value="">kutus</option>
            </select>
          </div>
          <div>
            <h2>Style</h2>
            <select name="" id="">
              <option value="">kutus</option>
              <option value="">kutus</option>
              <option value="">kutus</option>
              <option value="">kutus</option>
            </select>
          </div>
          <div>
            <h2>Pruce Range</h2>
            <select name="" id="">
              <option value="">kutus</option>
              <option value="">kutus</option>
              <option value="">kutus</option>
              <option value="">kutus</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroFilter
