import { BsSkype } from "react-icons/bs";
import { HiClock } from "react-icons/hi2";
import { IoCallSharp, IoLocationSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";

const ContactUs = () => {
      const data = [
            {
              id: 1,
              body: "Pet Sitter Co., Old Town Avenue,\nNew York, USA 23000",
              icon: <IoLocationSharp />,
            },
            {
              id: 2,
            //   body: "+1700 124-5678 \\n\\ +1700 124-5678",
              body: "P.V.Ramesh\nI.I.T. Hyderabad",
              icon: <IoCallSharp />,
            },
            {
              id: 3,
              body: "info@dan-fisher.com",
              icon: <MdMail />,
            },
            {
              id: 4,
              body: "dan_fisher\nhelp_danfisher",
              icon: <BsSkype />,
            },
            {
              id: 5,
              body: "Monday - Friday 9:00 - 21:00",
              icon: <HiClock />,
            },
      ];
      return (
            <div>
                  <h1 className="text-xl md:text-2xl font-normal mb-6 text-gray-600 mt-10 2xl:mt-0">
                        Contact Us
                  </h1>
                  {data.map((val) => (
                        <div
                              key={val.id}
                              className="w-full h-full flex flex-row items-center mt-6"
                        >
                              <div
                                    className="p-2 bg-slate-900 transition rounded-full"
                              >
                                    <span
                                    className="block text-white text-1xl font-extrabold"
                                    >
                                    {val.icon}
                                    </span>
                              </div>
                              <div className="ml-6 flex flex-col justify-start items-start">
                                    <p className="text-sm text-gray-500 w-full md:w-[420px]" style={{whiteSpace: 'pre-wrap'}}>
                                    {val.body}
                                    </p>
                              </div>
                        </div>
                  ))}
            </div>
      );
};

export default ContactUs;