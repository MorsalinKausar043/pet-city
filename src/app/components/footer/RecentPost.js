import Image from 'next/image';
import React from 'react'
import style from "../style/footer.module.css";

const RecentPost = () => {
      const imgLink =
        "https://i.ibb.co/Km11Wg1/kuanish-reymbaev-o-l-Lsd-VTxak-unsplash.jpg";
  return (
    <>
      <div className="flex flex-row justify-center items-center border-b-[.5px] border-gray-500 pb-4">
        {/* image  */}
        <div className="relative rounded ">
          <Image
            src={imgLink}
            width={144}
            height={84}
            alt="recent-post"
            className={`${style.recent_postImg} cursor-pointer`}
          />
        </div>
        {/* content  */}
        <div className="px-2 md:px-4">
          <span className="text-xs text-gray-400 italic">
            February, 18 2014
          </span>
          <h4 className="text-sm font-light text-gray-300 hover:text-lime-500 hover:underline transition cursor-pointer">
            Morbi urna mi, sollicitudin eget nibh fringilla, dignissim mattis
          </h4>
        </div>
      </div>
    </>
  );
}

export default RecentPost
