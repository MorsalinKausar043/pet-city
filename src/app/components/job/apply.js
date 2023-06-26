"use client";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import {
  useGetApplysApiQuery,
  useUpdateApplyMutation,
} from "@/app/redux/service/api/applyApi";
import { ToastError } from "@/app/utils/toast";
import { useEffect } from "react";

const Apply = ({ params }) => {
  const { data } = useGetApplysApiQuery();
  const [updateApply, { isLoading, isSuccess, isError }] =
    useUpdateApplyMutation();

  const applyUser = data?.data?.filter((apply) => apply.jobId === params);

  const handleUpdate = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updateStatus = { status: true };
        updateApply({ _id, updateStatus });
      }
    });
  };

  useEffect(() => {
    if (!isLoading && isSuccess) {
      Swal.fire("update!", "Your file has been approved.", "success");
    }
    if (!isLoading && !isSuccess && isError) {
      ToastError("Sorry! something was wrong.");
    }
  }, [isLoading, isSuccess, isError]);
  return (
    <main className="mx-auto border shadow-md px-12 py-8 mt-12 rounded-lg">
      <h1 className="pt-2 pb-8 text-center text-xl font-bold">
        See All Application
      </h1>

      <section className="grid grid-cols-1 gap-y-3 divide-y">
        {applyUser?.map(
          ({
            _id,
            firstName,
            lastName,
            email,
            phone,
            address,
            description,
            status,
          }) => (
            <details key={_id} open={false} className="group py-1 text-lg">
              <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                <div className="flex flex-wrap justify-around items-center w-full text-sm">
                  <h1>Application Id: {_id}</h1>
                  <p>
                    status:{" "}
                    {status ? (
                      <span className="text-green-600">approved</span>
                    ) : (
                      <span className="text-red-600">pending</span>
                    )}
                  </p>
                </div>
                <svg
                  className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <div className="pb-2">
                  <h2 className="title-font font-medium text-md text-gray-900">
                    {firstName} {lastName}
                  </h2>
                  <h3 className="text-gray-500 my-[2px] text-sm">{address}</h3>
                  <p className="mb-1 text-sm my-[2px]">{email}</p>
                  <p className="text-gray-500 my-[2px] text-sm">0{phone}</p>
                  <p
                    className="text-sm my-2 text-gray-400"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {description}
                  </p>
                  {!status && (
                    <button
                      onClick={() => handleUpdate(_id)}
                      className="my-2 bg-green-500 hover:bg-green-700 text-white text-sm py-2 px-4 rounded-full"
                    >
                      approve
                    </button>
                  )}
                </div>
              </div>
            </details>
          )
        )}
      </section>
    </main>
  );
};

export default Apply;
