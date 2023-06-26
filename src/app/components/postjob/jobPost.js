"use client";
import axios from "axios";
import { useState as UseState, useEffect as UseEffect } from "react";
import { usePostJobMutation as UsePostJobMutation } from "../../redux/service/api/jobApi";
import { ToastError, ToastSuccess } from "../../utils/toast";
import { BiLoaderAlt } from "react-icons/bi";
import { useRouter as UseRouter } from "next/navigation";

const JobPost = () => {
  const email = JSON.parse(localStorage.getItem("email"));
  const router = UseRouter();
  const [postJob, { isLoading, isSuccess, isError }] =
    UsePostJobMutation();
  const [formData, setFormData] = UseState({
    email: email,
    title: "",
    location: "",
    jobType: "",
    jobCategory: "",
    description: "",
  });
  const [photoURL, setPhotoURL] = UseState("");
  const [imgLoading, setImgLoading] = UseState(false);
  const [imgSuccess, setImgSuccess] = UseState(false);
  const jobTypes = [
    "Unspecified",
    "Pet Sitter",
    "Dog Sitter",
    "Cat Sitter",
    "Fish Walker",
    "Bird Sitter",
  ];
  const jobCategories = [
    "Unspecified",
    "Pet Feeding",
    "Cat Feeding",
    "Bird Feeding",
  ];
  //  handle input data
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // submit input data
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const jobInfo = { ...formData, photoURL };
    postJob(jobInfo);
  };

  UseEffect(() => {
    if (!isLoading && isSuccess) {
      router.push("/");
      ToastSuccess("Congratulations! Successfully Submitted.");
    }
    if (!isLoading && !isSuccess && isError) {
      ToastError("Sorry! something was wrong.");
    }
  }, [isLoading, isSuccess, isError]);

  // handle image input field
  const imageUploadHandler = (e) => {
    setImgLoading(true);
    const imageData = new FormData();
    imageData.set("key", "9b2b9d3d7ba993ac9cc97e348f937df0");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        let imageData = response?.data?.data.display_url;
        setPhotoURL(imageData);
        setImgLoading(false);
        setImgSuccess(true);
      })
      .catch((error) => {
        setImgLoading(false);
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
                value={formData.email}
                readOnly
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
              <h4 className="text-sm text-gray-700 mb-2">Job Location</h4>
              <input
                type="text"
                name="location"
                required
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
                required
                onChange={handleOnChange}
                className="mb-5 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                placeholder="Enter your Message here"
                value={formData?.description}
              />
              <h4 className="text-sm text-gray-700 mb-2">Photo</h4>
              <input
                type="file"
                name="file"
                className="mb-1 py-3 px-4 block w-full outline-none border-[1px] border-gray-200 rounded-md text-sm  dark:text-gray-400"
                placeholder="Enter your title here"
                onChange={imageUploadHandler}
                required
              />
              <small className="text-sm block text-gray-500 mb-5">
                Max. file size: 16 MB.
              </small>

              <button
                type="submit"
                disabled={imgLoading && !imgSuccess}
                className="bg-lime-500 hover:bg-lime-600 shadow-lg shadow-lime-200/10 text-white font-bold py-3 px-6 border-b-4 border-lime-700 hover:border-lime-700 rounded"
              >
                <span className="inline-block mr-2">
                  {(imgLoading && !imgSuccess) || isLoading & !isSuccess ? (
                    <div className="flex justify-center items-center flex-row">
                      <BiLoaderAlt className="animate-spin mr-3" />
                      Processing...
                    </div>
                  ) : (
                    "Submit Job"
                  )}
                </span>
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default JobPost;
