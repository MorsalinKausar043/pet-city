import Link from "next/link";
import { IoCreateOutline, IoLogOutOutline } from "react-icons/io5";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  useDispatch as UseDispatch,
  useSelector as UseSelector,
} from "react-redux";
import { signOut } from "firebase/auth";
import Auth from "@/app/firebase/firebase.init";
import { logOutUser } from "@/app/redux/fetures/Auth/authSlice";
import { ToastSuccess } from "@/app/utils/toast";

const NavbarHead = () => {
  const { email } = UseSelector((state) => state.user);
  const dispatch = UseDispatch();
  // logout function
  const logOut = () => {
    signOut(Auth)
      .then(() => {
        // Sign-out successful.
        dispatch(logOutUser());
        localStorage.clear();
        ToastSuccess("Logout Successful!");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

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
          </div>
          {/* middle side  */}
          <div>
            <div className="flex justify-center items-center flex-row">
              <div className="flex justify-center items-center flex-row text-xs font-light text-gray-400 hover:text-gray-100 transition">
                <span className="mr-2 text-sm">
                  <BsFillTelephoneFill />
                </span>
                <span>Call us on:</span>
                <span className="inline-block ml-1">+880 1534 127413</span>
              </div>
              <span className="mx-3 text-xs font-light text-gray-400">|</span>
              <div className="flex justify-center items-center flex-row text-xs font-light text-gray-400 hover:text-gray-100 transition">
                <span className="mr-2 text-sm">
                  <AiOutlineMail />
                </span>
                <span>Email:</span>
                <span className="inline-block ml-1">
                  shadman15-13480@diu.edu.bd
                </span>
              </div>
            </div>
          </div>
          {/* right side  */}
          <div>
            <div className="flex justify-center items-center flex-row">
              {email ? (
                <>
                  <button
                    onClick={logOut}
                    className="flex justify-center items-center flex-row text-xs font-light text-gray-400 hover:text-gray-100 transition"
                  >
                    <span className="mr-1 text-xl">
                      <IoLogOutOutline />
                    </span>
                    <span>LogOut</span>
                  </button>
                </>
              ) : (
                <>
                  <Link href="/signup">
                    <div className="flex justify-center items-center flex-row text-xs font-light text-gray-400 hover:text-gray-100 transition">
                      <span className="mr-2 text-sm">
                        <IoCreateOutline />
                      </span>
                      <span>REGISTER</span>
                    </div>
                  </Link>
                  <span className="mx-3 text-xs font-light text-gray-400">
                    |
                  </span>
                  <Link href="/signin">
                    <div className="flex justify-center items-center flex-row text-xs font-light text-gray-400 hover:text-gray-100 transition">
                      <span className="mr-2 text-sm">
                        <AiFillLock />
                      </span>
                      <span>LOGIN</span>
                    </div>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavbarHead;
