import { useGetJobsApiQuery } from "@/app/redux/service/api/jobApi";
import Loader from "@/app/utils/loader/Loader";
import Image from "next/image";
import Link from "next/link";
import { BiLogIn } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";

const LatestListing = () => {
  const { isError, isLoading, isSuccess, data } = useGetJobsApiQuery();
  const jobData = data?.data
    ?.slice()
    ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    ?.slice(0, 4);
  let content;

  if (isLoading && !isSuccess && !isError) {
    content = <Loader />;
  } else if (!isLoading && isSuccess && !isError) {
    if (jobData?.length < 1) {
      content = <Loader />;
    } else {
      content = jobData?.map(
        ({
          _id,
          photoURL,
          title,
          description,
          jobType,
          location,
          createdAt,
        }) => (
          <Link key={_id} href={`/job/${_id}`}>
            <div className="w-44 mt-2 hover:scale-105 transition mr-2 md:mr-0 box-border bg-white border-2 border-white p-1 rounded-md shadow-lg shadow-gray-300/80">
              {/* image  */}
              <div className="relative w-full h-40 overflow-hidden mb-2">
                <Image
                  src={photoURL}
                  alt="latest-post-image"
                  object-fit="cover"
                  fill={true}
                />
              </div>
              {/* body */}
              <div className="text-center pb-4">
                <span className="text-sm font-semibold text-gray-600 capitalize">
                  {title}
                </span>
                <p className="text-xs font-light text-gray-400">
                  {description.slice(0, 97)}...
                </p>
                <span className="block border-[.5px] border-gray-300 my-2"></span>
                <span className="inline-block text-xs font-light text-gray-500">
                  {jobType}
                </span>
                {/* location  */}
                <div className="flex flex-row justify-center items-center">
                  <span className="text-gray-600">
                    <MdLocationPin />
                  </span>
                  <span className="text-lime-400 text-xs font-light ml-2 hover:underline transition my-2 cursor-pointer">
                    {location}
                  </span>
                </div>
                {/* post  */}
                <div className="flex flex-row justify-center items-center">
                  <span className="text-lg  text-gray-600">
                    <BiLogIn />
                  </span>
                  <span className="text-gray-400 text-xs font-light ml-2">
                    Posted {createdAt.slice(0, 10)}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )
      );
    }
  } else if (!isLoading && !isSuccess && isError) {
    content = <p>Sorry Something Was Wrong!</p>;
  }
  return (
    <>
      <div className="w-full h-auto flex justify-center  md:justify-between items-center flex-wrap">
        {content}
      </div>
    </>
  );
};

export default LatestListing;
