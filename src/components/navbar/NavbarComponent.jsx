import { Button, Navbar } from "flowbite-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../../redux/feature/cart/cartSlice";

export function NavbarComponent() {
  const location = useLocation();
  const pathname = location?.pathname;
  const totalItems = useSelector(selectTotalItems);
  console.log("totalItems", totalItems);
  // console.log(pathname);
  console.log("location", location);
  const [navbarList, setNavbarList] = useState([
    { title: "Home", path: "/" },
    { title: "Count", path: "/count" }
  ]);

  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          React Toolkit
        </span>
      </Navbar.Brand>
      <div className="flex items-center md:order-2">
        <Link to="/cart" className="relative">
          <FaCartPlus className="mr-5" />
          <p className="absolute -top-4 right-2 text-cyan-500 font-semibold">
            {totalItems}
          </p>
        </Link>
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {navbarList?.map((item, index) => {
          return (
            <Navbar.Link
              key={index}
              as={Link}
              to={item.path}
              active={pathname === item.path}
            >
              {item.title}
            </Navbar.Link>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}
