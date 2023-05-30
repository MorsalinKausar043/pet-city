import { BsSearch } from "react-icons/bs";

const ContactUs = () => {
  const data = [
    {
      id: 1,
      body: `Pet Sitter Co., Old Town Avenue, New York, USA 23000`,
      icon: <BsSearch />,
    },
    {
      id: 2,
      body: "+1700 124-5678 +1700 124-5678",
      icon: <BsSearch />,
    },
    {
      id: 3,
      body: "info@dan-fisher.com",
      icon: <BsSearch />,
    },
    {
      id: 4,
      body: "dan_fisher help_danfisher",
      icon: <BsSearch />,
    },
    {
      id: 5,
      body: "Monday - Friday 9:00 - 21:00",
      icon: <BsSearch />,
    },
  ];
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-normal mb-6 text-gray-600 lg:mt-0 md:mt-0 sm:mt-10">
        Contact Us
      </h1>
      {data.map((val) => (
        <div
          key={val.id}
          className="w-full h-full flex flex-row items-center mt-6"
        >
          <div className="p-2 bg-slate-900 transition rounded-full">
            <span className="block text-white text-1xl font-extrabold">
              {val.icon}
            </span>
          </div>
          <div className="ml-6 flex flex-col justify-start items-start">
            <p className="text-sm text-gray-500 w-full md:w-[420px]">
              {val.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactUs;
