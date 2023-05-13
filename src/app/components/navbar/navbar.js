import NavItem from "./navItem";
import NavbarHead from "./navbarHead";


const Navbar = () => {
  return (
    <>
      <main
        className={` w-full h-full flex flex-col justify-center items-center sticky md:static z-50 top-0`}
      >
        {/* navbar head */}
        <NavbarHead/>
        {/* nav bar middle  */}
        <NavItem/>

      </main>
    </>
  );
};

export default Navbar;
