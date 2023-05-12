import Image from 'next/image';
import React from 'react'

const Owner = () => {
  return (
    <>
      <div>
        {/* left site  */}
        <div className="relative ">
          <Image
            src="/po1.jpg"
            width={144}
            height={84}
            alt="Owner-image"
            className={`cursor-pointer`}
          />
        </div>
        {/* right site  */}
      </div>
    </>
  );
}

export default Owner
