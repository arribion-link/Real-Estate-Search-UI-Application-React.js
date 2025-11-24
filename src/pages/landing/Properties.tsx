import property_header_image from "../../assets/images/propertie-header.png";

const Properties = () => {
    return (
      <>
        <section>
          <div className="bg-white rounded-2xl p-4 min-h-[50vh]">
            <div className="flex justify-between items-center relative z-10 ">
              <div>
                <span className="font-bold">Welcome to haven square</span>
                <h1 className="text-3xl text-blue-500">Find Your Ideal Property with ease</h1>
              </div>
              <div>
                <img
                  src={property_header_image}
                  alt=""
                  className="max-w-[30em] absolute right-0 top-[2em]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-[80vh] bg-gray-100 mt-4"></section>
      </>
    );
}

export default Properties
