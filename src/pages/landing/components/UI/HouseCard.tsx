import ph from "../../../../assets/images/placeholder.jpg";
import { IoPricetagOutline } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiStairsLine } from "react-icons/ri";
import { IoBedOutline } from "react-icons/io5";
import { FaHandHoldingWater } from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa";
const HouseCard = () => {
  return (
    <>
      <article className="bg-white max-w-[30em]">
        <img src={ph} alt="" className="max-w-[30em]" />
        <div className="bg-white border p-4">
          <div className="flex justify-between">
            <h3>SunShine</h3>
            <h3 className="flex items-center gap-2">
              <IoPricetagOutline />
              KES
              <span>3,000</span>
            </h3>
          </div>
          <div>
            <div className="flex justify-between">
              <h3 className="flex items-center">
                <FaMapLocationDot /> Gitwe(Dias B)
              </h3>
              <h3 className="flex items-center">
                <IoBedOutline /> Bed <span>2</span>
              </h3>
            </div>
            {/* <div className="">
            </div> */}
            <div className="flex justify-between">
              <h3 className="flex items-center">
                <RiStairsLine /> Floors <span>4</span>
              </h3>
              <h3 className="flex items-center">
                <FaHandHoldingWater /> Water <span>Available</span>
              </h3>
              <h3 className="flex items-center">
                <FaInternetExplorer /> WI-FI <span>Available</span>
              </h3>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default HouseCard
