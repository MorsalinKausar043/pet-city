"use client";
import axios from "axios";
import { useState as UseState } from "react";

const page = () => {
  const [formData, setFormData] = UseState({
    email: "",
    title: "",
    location: "",
    jobType: "",
    jobCategory: "",
    description: "",
    url: "",
  });
  const [photoURL, setPhotoURL] = UseState("");
  const jobTypes = [
    "Unspecified",
    "Pet Sitter",
    "Dog Sitter",
    "Cat Sitter",
    "Dog Walker",
  ];
  const jobCategories = ["Unspecified", "Pet Feeding", "Cat Feeding"];
  //  handle input data
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // submit input data
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, photoURL });
  };

  // handle image input field
  const imageUploadHandler = (e) => {
    const imageData = new FormData();
    imageData.set("key", "74355ef6f713c59f526e96ca148bd85b");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        let imageData = response?.data?.data.display_url;
        setPhotoURL(imageData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <main className="w-full">
        <section className="container px-2 md:px-24 lg:px-60 mx-auto py-10">
          <div className="py-10 box-border bg-white border-2 border-white p-5 rounded-md shadow-lg shadow-gray-300/80">
            <form onSubmit={handleLoginSubmit}>
              <h4 className="text-sm text-gray-700 mb-2">
                Your Email <span className="text-red-500">*</span>
              </h4>
              <input
                type="text"
                required
                name="email"
                onChange={handleOnChange}
                className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                placeholder="Enter your email here"
                value={formData?.email}
              />
              <h4 className="text-sm text-gray-700 mb-2">
                Job Title <span className="text-red-500">*</span>
              </h4>
              <input
                type="text"
                required
                name="title"
                onChange={handleOnChange}
                className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                placeholder="Enter your title here"
                value={formData?.title}
              />
              <h4 className="text-sm text-gray-700 mb-2">
                Job Location <small>(optional)</small>
              </h4>
              <input
                type="text"
                name="location"
                onChange={handleOnChange}
                className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                placeholder="Enter your location here"
                value={formData?.location}
              />
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-2 lg:gap-2">
                <div className="w-full">
                  <h4 className="text-sm text-gray-700 mb-2">Job Type</h4>
                  <select
                    onChange={handleOnChange}
                    name="jobType"
                    id="jobType"
                    value={formData?.jobType}
                    className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                  >
                    {jobTypes?.map((item, i) => (
                      <option value={item} key={i}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full">
                  <h4 className="text-sm text-gray-700 mb-2">Job category</h4>
                  <select
                    onChange={handleOnChange}
                    name="jobCategory"
                    id="jobCategory"
                    value={formData?.jobCategory}
                    className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                  >
                    {jobCategories?.map((item, i) => (
                      <option value={item} key={i}>
                        {item}
                      </option>
                    ))}
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
                value={formData?.description}
              />
              <h4 className="text-sm text-gray-700 mb-2">
                Application email/URL
              </h4>
              <input
                type="text"
                name="url"
                onChange={handleOnChange}
                className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                placeholder="Enter your url here"
                value={formData?.url}
              />
              <h4 className="text-sm text-gray-700 mb-2">
                Photo (optional) <small>(optional)</small>
              </h4>
              <input
                type="file"
                name="file"
                className="mb-1 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                placeholder="Enter your title here"
                onChange={imageUploadHandler}
              />
              <small className="text-sm block text-gray-500 mb-5">
                Max. file size: 32 MB.
              </small>

              <button
                type="submit"
                disabled={!photoURL}
                className="bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-200/10 text-white font-bold py-3 px-6 border-b-4 border-sky-700 hover:border-sky-700 rounded"
              >
                <span className="inline-block mr-2">Preview Job Listing →</span>
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
