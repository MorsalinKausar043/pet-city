import Image from 'next/image';

import aboutIMage from "../../assets/about.jpg";

const OurSite = () => {
  return (
    <div className="px-2 md:px-10 lg:px-20 container py-10 md:py-16 mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 border-b-[.5px] border-gray-300 pb-14">
        {/* left site  */}
        <div className="flex justify-center items-center">
          <div className="border-white p-1 shadow-lg shadow-gray-300/80">
            <Image
              src={aboutIMage}
              width={544}
              height={300}
              alt="about-image"
              className='w-full'
            />
          </div>
        </div>
        {/* right site  */}
        <div className="flex items-center mt-8 md:mt-0">
          <div>
              <h1 className="text-xl md:text-2xl font-normal mb-6 text-gray-600">
                Welcome to Our Site!
              </h1>

              <p className="text-sm text-gray-500 w-full md:w-[420px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu nisi ac mi malesuada vestibulum. Phasellus tempor nunc eleifend cursus molestie. Mauris lectus arcu, pellentesque at sodales sit amet, condimentum id nunc.
              </p>
              <br />
              <p className="text-sm text-gray-500 w-full md:w-[420px]">
                Donec ornare mattis suscipit. Praesent fermentum accumsan vulputate. Sed velit nulla, sagittis non erat id, dictum vestibulum ligula. Maecenas sed enim sem. Etiam scelerisque gravida purus nec interdum. Phasellus venenatis ligula in faucibus consequat. Aliquam dictum nulla eu varius porta. Phasellus tempor nunc.
              </p>
              <div className="mt-14">
                <button className="bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-200/10 text-white font-bold py-3 px-6 border-b-4 border-sky-700 hover:border-sky-700 rounded">
                  Read More
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurSite
