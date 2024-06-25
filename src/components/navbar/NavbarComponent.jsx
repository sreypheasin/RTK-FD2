import { Button, Navbar } from "flowbite-react";
import { useSelector } from "react-redux";
import { selectValue } from "../../redux/feature/counterSlice";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function NavbarComponent() {
  const location = useLocation();
  const pathname = location?.pathname;
  // console.log(pathname);
  // console.log("location", location);
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
      <div className="flex md:order-2">
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
