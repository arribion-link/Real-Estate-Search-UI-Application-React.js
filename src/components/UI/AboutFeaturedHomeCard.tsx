import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
const AboutFeaturedHomeCard = () => {
  return (
    <div className="bg-white rounded-2xl max-w-3xs p-4">
      <h2>Name</h2>
      <h4 className="text-gray-800">Location</h4>
      <p>Description</p>
      <div className="flex justify-between">
        <div className="flex gap-4 m-2.5">
          <IoArrowBackCircleOutline size={30} />
          <IoArrowForwardCircleOutline size={30} />
        </div>
        <div>
          Price $<span>12002.99</span>
        </div>
      </div>
    </div>
  );
};

export default AboutFeaturedHomeCard;
