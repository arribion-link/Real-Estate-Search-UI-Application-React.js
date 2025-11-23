import ph from "../../assets/placeholder.png";

const HouseCard = () => {
  return (
      <>
        <article className="bg-white">
              <img src={ph} alt="" className="" />
              <div className="bg-white border p-4">
                <div className="flex justify-between">
                    <div>
                    <h2>Sunshine Hostels</h2>
                    </div>
                    <div className="bg-gray-600 p4 rounded">
                        ^
                    </div>
                  </div>
                  <div>
                     <p>\/ Kutus, Gitwe</p>
                  </div>
                  <h4>KES <span>3,500</span></h4>
              </div>
            
        </article>
    </>
  )
}

export default HouseCard
