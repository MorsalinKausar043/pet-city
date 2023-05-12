import Image from "next/image";
import LatestListing from "./letestListing";
import FeaturedListing from "./feturedListing";


const Listing = () => {
    
  return (
    <>
      <main className="bg-gray-100 w-full h-full flex flex-col justify-center items-center">
        <section class="container mx-auto flex px-2 md:px-20 lg:px-32 py-12 md:flex-row flex-col items-center">
          {/* left site  */}
          <div class="md:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
           <LatestListing />
          </div>
          {/* right site  */}
          <div class="w-[350px] shadow-md shadow-lime-300/75 border-2 border-lime-200">
            <FeaturedListing />
          </div>
        </section>
      </main>
    </>
  );
};

export default Listing;