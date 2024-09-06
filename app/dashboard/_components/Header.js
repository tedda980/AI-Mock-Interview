import React from "react";
import logo from "../../../public/logoipsum-248.svg";
import { UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <section>
      <div className="bg-gray-100 pb-6 pt-3">
        <div>
          <img src={logo} />
        </div>
        <div>
          <ul className="flex space-x-5 lg:ml-[545px] text-[16px]">
            <li className="text-blue-800 transition-transform hover:scale-x-110">
              Dashboard
            </li>
            <li className="hover:text-blue-800 transition-transform hover:scale-x-110">
              Questions
            </li>
            <li className="hover:text-blue-800 transition-transform hover:scale-x-110">
              Upgrade
            </li>
            <li className="hover:text-blue-800 transition-transform hover:scale-x-110">
              How it Works?
            </li>
            <li className="lg:pl-[350px]">
              <UserButton />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Header;
