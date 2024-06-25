import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../navbar/NavbarComponent";

export default function Layout() {
  return (
    <>
      <NavbarComponent />
      <main>
        <Outlet />
      </main>
    </>
  );
}
