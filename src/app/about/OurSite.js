import Image from 'next/image';

const OurSite = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap border-b-[.5px] border-gray-300 pb-14">
        {/* left site  */}
        <div
          className="flex justify-center items-center"
        >
          <Image
            src="/po1.png"
            width={544}
            height={300}
            alt="Owner-image"
            className={`cursor-pointer`}
          />
        </div>
        {/* right site  */}
        <div className="mt-8 md:mt-0">
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
    </>
  );
}

export default OurSite
