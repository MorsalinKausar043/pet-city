import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <main className="w-full flex justify-center items-center flex-col">
        <section className="container">
          <div className="flex justify-center items-center flex-col">
            <div>
              <h1>hello world this is Jobs Page!</h1>
            </div>
            <div>
              <Link href="/job/1">
                <span>job 1</span>
              </Link>
            </div>
            <div>
              <Link href="/job/2">
                <span>job 2</span>
              </Link>
            </div>
            <div>
              <Link href="/job/3">
                <span>job 3</span>
              </Link>
            </div>
            <div>
              <Link href="/job/4">
                <span>job 4</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
