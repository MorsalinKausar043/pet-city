import { setModal } from "@/app/redux/fetures/filter/filterSlice";
import { usePostApplyMutation } from "@/app/redux/service/api/applyApi";
import { ToastError, ToastSuccess } from "@/app/utils/toast";
import { useRouter as UseRouter } from "next/navigation";
import { useState as UseState, useEffect as UseEffect } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { useDispatch as UseDispatch } from "react-redux";

const Modal = ({ params }) => {
  const dispatch = UseDispatch();
  const [postApply, { isLoading, isSuccess, isError }] = usePostApplyMutation();
  const router = UseRouter();
  const email = JSON.parse(localStorage.getItem("email"));
  // handle input state
  const [formData, setFormData] = UseState({
    firstName: "",
    lastName: "",
    email: email,
    phone: "",
    address: "",
    description: "",
  });

  // handle input filed
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // submit data
  const handleSubmit = (e) => {
    e.preventDefault();
    const applyInfo = { ...formData, jobId: params };
    postApply(applyInfo);
  };

  UseEffect(() => {
    if (!isLoading && isSuccess) {
      ToastSuccess("Congratulations! Apply Successful.");
      dispatch(setModal(false));
    }
    if (!isLoading && !isSuccess && isError) {
      ToastError("Sorry! something was wrong.");
    }
  }, [isLoading, isSuccess, isError, router, dispatch]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white px-12 py-6 md:w-8/12 lg:w-4/12 shadow-xl shadow-gray-400/40 rounded-lg"
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  required
                  id="first-name"
                  autoComplete="given-name"
                  onChange={handleInput}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  id="last-name"
                  onChange={handleInput}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  onChange={handleInput}
                  required
                  value={formData.email}
                  type="email"
                  autoComplete="email"
                  readOnly
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                phone number
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="phone"
                  onChange={handleInput}
                  required
                  value={formData.phone}
                  id="phone"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  onChange={handleInput}
                  required
                  value={formData.address}
                  id="address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                description
              </label>
              <div className="mt-2">
                <textarea
                  type="text"
                  name="description"
                  onChange={handleInput}
                  required
                  value={formData.description}
                  id="description"
                  autoComplete="street-address"
                  className="block w-full h-32 rounded-md border-0 py-1.5 px-2 resize-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          onClick={() => dispatch(setModal(false))}
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading && !isSuccess}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {isLoading & !isSuccess ? (
            <div className="flex justify-center items-center flex-row">
              <BiLoaderAlt className="animate-spin mr-3" />
              Processing...
            </div>
          ) : (
            "Apply"
          )}
        </button>
      </div>
    </form>
  );
};

export default Modal;
