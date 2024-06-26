import { Button, Navbar } from "flowbite-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";

export function NavbarComponent() {
  const totalItems = useSelector((state) => state?.cart?.total);
  const location = useLocation();
  const pathname = location?.pathname;
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
      <div className="flex md:order-2 items-center ">
        <Link className="relative" to={"/cart"}>
          <FaCartArrowDown className="mr-5 hover:text-cyan-600" />
          <span className="absolute -top-4 right-2 font-semibold text-cyan-600">
            {totalItems}
          </span>
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
