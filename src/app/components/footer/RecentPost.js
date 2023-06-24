import Image from "next/image";
import React from "react";
import style from "../style/footer.module.css";
import { useGetJobsApiQuery } from "@/app/redux/service/api/jobApi";
import Link from "next/link";

const RecentPost = () => {
  const { isError, isLoading, isSuccess, data } = useGetJobsApiQuery();
  const jobData = data?.data
    ?.slice()
    ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    ?.slice(0, 3);
  return (
    <>
      {jobData?.map(({ _id, photoURL, description, createdAt }) => (
        <Link key={_id} href={`/job/${_id}`}>
          <div className="flex flex-row justify-center items-center border-b-[.5px] border-gray-500 pb-4">
            {/* image  */}
            <div className="relative w-40 h-16  rounded ">
              <Image
                src={photoURL}
                     object-fit="cover"
                     fill={true}
                alt="recent-post"
                className={`${style.recent_postImg} cursor-pointer`}
              />
            </div>
            {/* content  */}
            <div className="px-2 md:px-4">
              <span className="text-xs text-gray-400 italic">
                Posted {createdAt?.slice(0, 10)}
              </span>
              <h4 className="text-sm font-light text-gray-300 hover:text-lime-500 hover:underline transition cursor-pointer">
                {description.slice(0, 70)}...
              </h4>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default RecentPost;
