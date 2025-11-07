import ph from "../../assets/placeholder.png";

const HouseCard = () => {
  return (
      <>
        <article className="bg-white p-4 rounded-2xl">
              <img src={ph} alt="" className="rounded-2xl w-full h-auto " />
              <div>
                <div className="flex justify-between">
                    <div>
                    <h2>Sunshine Hostels</h2>
                    </div>
                    <div className="bg-gray-600 py-6 px-6 rounded">
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
