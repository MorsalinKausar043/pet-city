import React from 'react';
import Owner from './owner';
import Sitter from './sitter';

const OwnerSitter = () => {
  return (
    <>
      <main
        className={`bg-owner-sitter w-full h-full flex flex-col justify-center items-center`}
      >
        <section className="px-2 md:px-10 lg:px-20 container py-10 md:py-16 mx-auto">
          {/* owner part  */}
          <Owner/>
          {/* sitter part  */}
          <Sitter/>
        </section>
      </main>
    </>
  );
}

export default OwnerSitter
