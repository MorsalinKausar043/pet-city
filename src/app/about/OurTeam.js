import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const OurTeam = () => {
      const members = [
            {
                  "full_name": "John Doe",
                  "designation": "CEO",
                  "body": "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem",
                  "img": "https://api.softexsolution.com/1681192550303.png",
                  "facebook": <FaFacebookF/>,         
                  "linkedin": <FaLinkedinIn/>,         
                  "instagram": <FaInstagram/>         
            },
            {
                  "full_name": "Michael Smith",
                  "designation": "Web Designer",
                  "body": "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem",
                  "img": "https://api.softexsolution.com/1681192651460.png",
                  "facebook": <FaFacebookF/>,         
                  "linkedin": <FaLinkedinIn/>,         
                  "instagram": <FaInstagram/>   
            },
            {
                  "full_name": "Sasha Gray",
                  "designation": "PHP Developer",
                  "body": "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem",
                  "img": "https://api.softexsolution.com/1681207882363.jpg",
                  "facebook": <FaFacebookF/>,         
                  "linkedin": <FaLinkedinIn/>,         
                  "instagram": <FaInstagram/>  
            },
            {
                  "full_name": "Hanna Doe",
                  "designation": "HTML Coder",
                  "body": "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem",
                  "img": "https://api.softexsolution.com/1681207894912.jpg",
                  "facebook": <FaFacebookF/>,         
                  "linkedin": <FaLinkedinIn/>,         
                  "instagram": <FaInstagram/>  
            },
      ]
  return (
    <>
      <main className="w-full">
            <section className="container px-2 md:px-10 lg:px-20 mx-auto py-10">
                  <h1 className="text-xl md:text-2xl font-normal mb-6 text-gray-600">
                        Our Team
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {members?.map((member, idx) => (
                              <div
                                    className="relative group overflow-hidden box-border bg-white border-2 border-white p-1 rounded-md shadow-lg shadow-gray-300/80"
                              >
                                    <div className="relative h-[245px]">
                                          <img
                                                alt="Developer"
                                                src={member.img}
                                                className="w-full h-full object-cover"
                                          />
                                          <div className="invisible group-hover:visible absolute top-0 left-0 w-full h-full bg-[rgba(17,34,49,0.4)]">
                                                <div className="absolute bottom-[32px] w-full flex justify-center gap-[16px] mt-auto">
                                                      <Link
                                                            href="#"
                                                            target="_blank"
                                                            className="w-[35px] h-[35px] flex items-center justify-center bg-[#a6ce39] rounded-full"
                                                      >
                                                            {member.facebook}
                                                      </Link>
                                                      <Link
                                                            href="#"
                                                            target="_blank"
                                                            className="w-[35px] h-[35px] flex items-center justify-center bg-[#a6ce39] rounded-full"
                                                      >
                                                            {member.linkedin}
                                                      </Link>
                                                      <Link
                                                            href="#"
                                                            target="_blank"
                                                            className="w-[35px] h-[35px] flex items-center justify-center bg-[#a6ce39] rounded-full"
                                                      >
                                                            {member.instagram}
                                                      </Link>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="group-hover:bg-[#a6ce39] group-hover:text-white text-black p-[1.2rem]">
                                          <h3 className="text-[1.375rem] font-semibold mb-[0.25rem]">
                                                {member.full_name}
                                          </h3>
                                          <p className="group-hover:text-white text-[#80888F] text-[1rem] font-semibold">
                                                {member.designation}
                                          </p>
                                          <p className="group-hover:text-white text-[#80888F] text-[0.8rem] mt-1">
                                                {member.body}
                                          </p>
                                    </div>
                              </div>
                        ))}
                  </div>
            </section>
      </main>
    </>
  );
}

export default OurTeam
