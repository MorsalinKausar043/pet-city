import Link from "next/link";
import { AiFillLock } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";

const NavbarHead = () => {
  return (
    <>
      <section className="bg-zinc-800 w-full h-auto hidden md:block border-b-4 border-lime-400">
        {/* navbar top part  */}
        <div className="px-2 md:px-10 lg:px-20 container py-10 md:py-2 mx-auto flex justify-between items-center">
          {/* left side  */}
          <div className="">
            <Link href="/">
              <span className="text-xs font-light text-gray-400 hover:text-gray-100 transition">
                PRICING
              </span>
            </Link>
            <span className="mx-3 text-xs font-light text-gray-400">|</span>
            <Link href="/">
              <span className="text-xs font-light text-gray-400 hover:text-gray-100 transition">
                SITEMAP
              </span>
            </Link>
            <span className="mx-3 text-xs font-light text-gray-400">|</span>
            <Link href="/">
              <span className="text-xs font-light text-gray-400 hover:text-gray-100 transition">
                {"FAQ'S"}
              </span>
            </Link>
            <span className="mx-3 text-xs font-light text-gray-400">|</span>
            <Link href="/about">
              <span className="text-xs font-light text-gray-400 hover:text-gray-100 transition">
                {"ABOUT"}
              </span>
            </Link>
            <span className="mx-3 text-xs font-light text-gray-400">|</span>
            <Link href="/contact">
              <span className="text-xs font-light text-gray-400 hover:text-gray-100 transition">
                {"CONTACT"}
              </span>
            </Link>
            <span className="mx-3 text-xs font-light text-gray-400">|</span>
            <Link href="/jobpost">
              <span className="text-xs font-light text-gray-400 hover:text-gray-100 transition">
                {"JOB POST"}
              </span>
            </Link>
          </div>
          {/* right side  */}
          <div>
            <div className="flex justify-center items-center flex-row">
              <Link href="/signup">
                <div className="flex justify-center items-center flex-row text-xs font-light text-gray-400 hover:text-gray-100 transition">
                  <span className="mr-2 text-sm">
                    <IoCreateOutline />
                  </span>
                  <span>REGISTER</span>
                </div>
              </Link>
              <span className="mx-3 text-xs font-light text-gray-400">|</span>
              <Link href="/signin">
                <div className="flex justify-center items-center flex-row text-xs font-light text-gray-400 hover:text-gray-100 transition">
                  <span className="mr-2 text-sm">
                    <AiFillLock />
                  </span>
                  <span>LOGIN</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavbarHead;
