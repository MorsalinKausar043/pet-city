
const ContactForm = () => {
      return (
            <div className="py-10 box-border bg-white border-2 border-white p-5 rounded-md shadow-lg shadow-gray-300/80 w-full 2xl:w-auto">
                  <h1 className="text-lg font-bold text-gray-500 mb-5">Contact Form</h1>
                  <form>
                        {/* <div className="flex justify-between items-center flex-wrap"> */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-4">
                              <div>
                                    <h4 className="text-sm text-gray-700 mb-2">Name <span className="text-red-500">*</span></h4>
                                    <input
                                          type="text"
                                          required
                                          className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                                          placeholder="Enter your name here"
                                    />
                              </div>
                              <div>
                                    <h4 className="text-sm text-gray-700 mb-2">Email <span className="text-red-500">*</span></h4>
                                    <input
                                          type="text"
                                          required
                                          className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                                          placeholder="Enter your email here"
                                    />
                              </div>
                              <div>
                                    <h4 className="text-sm text-gray-700 mb-2">Subject <span className="text-red-500">*</span></h4>
                                    <input
                                          type="text"
                                          required
                                          className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                                          placeholder="Enter your subject here"
                                    />
                              </div>
                        </div>
                        <h4 className="text-sm text-gray-700 mb-2">Message <span className="text-red-500">*</span></h4>
                        <textarea
                              required
                              rows="5"
                              className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                              placeholder="Enter your Message here"
                        />
                        <button className="bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-200/10 text-white font-bold py-3 px-6 border-b-4 border-sky-700 hover:border-sky-700 rounded">
                              Send Message
                        </button> 
                        {/* <input 
                        type="submit"
                        className="bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-200/10 text-white font-bold py-3 px-6 border-b-4 border-sky-700 hover:border-sky-700 rounded"
                        value="Login"
                        /> */}
                  </form>
            </div>
      );
};

export default ContactForm;