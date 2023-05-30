import ContactForm from "./ContactForm";
import ContactUs from "./ContactUs";

const page = () => {
      
      return (
            <main className="w-full">
                  <section className="container px-2 md:px-10 lg:px-20 mx-auto py-10">
                        <div
                              className="box-border bg-white border-2 border-white p-1 rounded-md shadow-lg shadow-gray-300/80"
                        >
                              <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29197.34005481236!2d90.34552536648118!3d23.83041962475714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c13737cf6959%3A0xf4b3c8e9c0e5a171!2z4KaX4KeL4Kay4Ka-4KaqIOCml-CnjeCmsOCmvuCmrg!5e0!3m2!1sbn!2sbd!4v1684047185823!5m2!1sbn!2sbd"
                                    width="100%"
                                    height="500"
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade">
                              </iframe>
                        </div>
                        <br />
                        <br />
                        <div className="flex justify-between items-center flex-wrap border-b-[.5px] border-gray-300 pb-14">
                        {/* <div className="grid border-b-[.5px] border-gray-300 pb-14"> */}
                              <ContactForm/>
                              <ContactUs/>
                        </div>
                  </section>
            </main>
      );
};

export default page;