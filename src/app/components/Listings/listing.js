import Image from "next/image";
import LatestListing from "./letestListing";
import FeaturedListing from "./feturedListing";


const Listing = () => {
    
  return (
    <>
      <main className="bg-gray-100 w-full h-full flex flex-col justify-center items-center ">
        <section className="container mx-auto flex px-2 md:px-20 lg:px-32 py-12 md:flex-row flex-col items-center">
          {/* left site  */}
          <div className="md:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {/* title  */}
            <h1 className="mb-8">
              <span className="text-2xl text-zinc-600 font-semibold">
                Latest Listings
              </span>
              <span className="inline-block mx-2 text-zinc-400 text-sm font-light">
                |
              </span>
              <span className=" text-zinc-400 text-md italic font-light">
                Find yours now!
              </span>
            </h1>
            <LatestListing />
          </div>
          {/* right site  */}
          <div className="w-[350px] h-auto ">
            {/* title  */}
            <h1 className="mb-8">
              <span className="text-2xl text-zinc-600 font-semibold">
                Featured Listings
              </span>
            </h1>
            <FeaturedListing />
          </div>
        </section>
      </main>
    </>
  );
};

export default Listing;
