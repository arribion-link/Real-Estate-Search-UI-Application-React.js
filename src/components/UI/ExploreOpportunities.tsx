import { ImArrowUpRight2 } from "react-icons/im";

const ExploreOpportunities = () => {
  return (
    <div className="bg-gray-500 rounded-2xl p-4 max-w-3xs">
      <h3>Fresh Opportunities</h3>
      <p className="text-gray-800">
        Stay ahead of the curve with our latest property listing. From modern
        condos to charming houses, we have a variety of options to suite your
        needs. Explore our newest additions and find your perfect match.
      </p>
      <button className="flex align gap-2 p-4 w-40 bg-white text-gray-900 rounded border border-gray-950" >Search more <ImArrowUpRight2/> </button>
    </div>
  );
};

export default ExploreOpportunities;
