"use client";


const page = () => {
  const jobTypes = [ "Unspecified", "Pet Sitter", "Dog Sitter", "Cat Sitter", "Dog Walker"];
  const jobCategories = [ "Unspecified", "Pet Feeding", "Cat Feeding"];


  const handleOnChange = e => {
    const { name, value } = e.target;
    setFormData( { ...formData, [name]: value } );
  }
  const handleLoginSubmit = e => {
    e.preventDefault();
  }
// console.log("jobType---", jobType)
// console.log("jobCategory---", formData)
  return (
    <>
      <main className="w-full">
        <section className="container px-2 md:px-24 lg:px-60 mx-auto py-10">
          <div className="py-10 box-border bg-white border-2 border-white p-5 rounded-md shadow-lg shadow-gray-300/80">
            {/* <h1 className="text-sm font-bold text-gray-500 mb-2">Have an account?</h1>
            <Link href="/signin">
                  <button className="mb-10 bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-200/10 text-white font-bold py-1 px-6 border-b-4 border-sky-700 hover:border-sky-700 rounded">
                        Login
                  </button> 
            </Link> */}

            <form onSubmit={handleLoginSubmit}>
              <h4 className="text-sm text-gray-700 mb-2">Your Email <span className="text-red-500">*</span></h4>
              <input
                  type="text"
                  required
                  name="email"
                  onChange={handleOnChange}
                  className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                  placeholder="Enter your email here"
                />
              <h4 className="text-sm text-gray-700 mb-2">Job Title <span className="text-red-500">*</span></h4>
              <input
                  type="text"
                  required
                  name="title"
                  onChange={handleOnChange}
                  className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                  placeholder="Enter your title here"
                />
              <h4 className="text-sm text-gray-700 mb-2">Job Location <small>(optional)</small></h4>
              <input
                  type="text"
                  name="location"
                  onChange={handleOnChange}
                  className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                  placeholder="Enter your location here"
                />
               <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-2 lg:gap-2">
                   <div className="w-full">
                       <h4 className="text-sm text-gray-700 mb-2">Job Type</h4>
                       <select onChange={handleOnChange} name="jobType" id="jobType" className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400">
                              {
                                    jobTypes?.map((item, i) => (
                                          <option value={item} key={i}>{item}</option>
                                    ))
                              }
                        </select>
                   </div>
                   <div className="w-full">
                       <h4 className="text-sm text-gray-700 mb-2">Job category</h4>
                       <select onChange={handleOnChange} name="jobCategory" id="jobCategory" className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400">
                              {
                                    jobCategories?.map((item, i) => (
                                          <option value={item} key={i}>{item}</option>
                                    ))
                              }
                        </select>
                   </div>
               </div>
               <h4 className="text-sm text-gray-700 mb-2">Description</h4>
               <textarea
                  rows="5"
                  name="description"
                  onChange={handleOnChange}
                  className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                  placeholder="Enter your Message here"
               />
              <h4 className="text-sm text-gray-700 mb-2">Application email/URL</h4>
              <input
                  type="text"
                  name="url"
                  onChange={handleOnChange}
                  className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                  placeholder="Enter your url here"
                />
              <h4 className="text-sm text-gray-700 mb-2">Photo (optional) <small>(optional)</small></h4>
              <input
                  type="file"
                  name="file"
                  onChange={handleOnChange}
                  className="mb-1 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                  placeholder="Enter your title here"
              />
              <small className="text-sm block text-gray-500 mb-5">Max. file size: 32 MB.</small>

             <button type="submit" className="bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-200/10 text-white font-bold py-3 px-6 border-b-4 border-sky-700 hover:border-sky-700 rounded">
              <span className="inline-block mr-2">Preview Job Listing →</span>
            </button> 
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default page
