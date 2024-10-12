import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

import logo from "../../../public/logoipsum-248.svg";

function LinksPage() {
  return (
    <div>
      <nav className="bg-gray-100 shadow-md w-full ">
        <div className="pb-4 pt-3">
          <div>
            <img src={logo} />
          </div>
          <ul className="flex space-x-5 lg:ml-[520px] md:ml-60 sm:ml-40 text-[16px]">
            <li className="hover:text-orange-300 transition-transform hover:scale-x-110">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="hover:text-orange-300 transition-transform hover:scale-110">
              <Link href="/questions">Questions</Link>
            </li>
            <li className="hover:text-orange-300 transition-transform hover:scale-x-110">
              <Link href="/upgrade">Upgrade</Link>
            </li>
            <li className="hover:text-orange-300 transition-transform hover:scale-x-110">
              <Link href="/how-it-works">How it Works?</Link>
            </li>
            <li className="lg:pl-[380px] md:pl-72 sm:pl-32">
              <UserButton />
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <section className="mx-32">
          <div className=" mt-16 py-3  px-1 mx-96 bg-gray-100 rounded-full">
            <a href="#" className="px-1">
              <span className="bg-orange-300 rounded-full py-1 px-3 mr-4 text-white text-sm ">
                New
              </span>
              <span className="bg-gray-100 rounded-full text-stone-950">
                Tubejuruji.com All new Apps
              </span>
            </a>
          </div>
          <div>
            <div className=" lg:text-[55px] md:text-[38px] sm:text-[28px] text-center font-extrabold mt-8">
              Your Personal AI Interview Coach
            </div>
            <div className="text-center lg:text-[20px] md:text-[18px] sm:text-[15px] text-gray-500">
              Double your chances of landing that job offer with our AI-powered
              interview prep
            </div>
          </div>
        </section>
        <div>
          <ul className="text-center mt-10">
            <li className="space-x-5">
              <Button className="bg-orange-300">
                <Link href="/dashboard"> Get Started</Link>
              </Button>
              <Button className="bg-orange-300">
                <Link href="https://youtu.be/Q5LM985yUmQ" target="_blank">
                  Watch video
                </Link>
              </Button>
            </li>
          </ul>
        </div>
        <div className="mt-14">
          <p className="text-gray-400 text-center">FEATURED IN</p>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className="mt-32">
          <p className="text-center space-y-5">
            <span className="font-bold  text-3xl">How it Works?</span>
            <br />
            <span className="text-gray-500 text-sm">
              Give mock interview in just 3 simplar easy step
            </span>
          </p>
          <ul className="content-center flex space-x-9 mt-6">
            <li className="p-10 text-center  mt-6 border rounded-lg bg-gray-50 w-96 h-48 hover:shadow-md ml-20 ">
              <Link href="#">
                <p className="text-lg font-bold mb-2">
                  Write promot for your form
                </p>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Ex ut
                  quo possimus adipisci distinctio alias voluptatum blanditiis
                  laudantium.
                </p>
              </Link>
            </li>
            <li className="p-10 text-center  mt-6 border rounded-lg bg-gray-50  w-96 h-48  hover:shadow-md ">
              <Link href="#">
                <p className="text-lg font-bold mb-2">Edit Your form</p>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Ex ut
                  quo possimus adipisci distinctio alias voluptatum blanditiis
                  laudantium.
                </p>
              </Link>
            </li>
            <li className="p-10 text-center  mt-6 border rounded-lg bg-gray-50  w-96 h-48  hover:shadow-md ">
              <Link href="#">
                <p className="text-lg font-bold mb-2">
                  Share & Start Accepting Responses
                </p>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Ex ut
                  quo possimus adipisci distinctio alias voluptatum blanditiis
                  laudantium.
                </p>
              </Link>
            </li>
          </ul>
          <div className="text-center my-24">
            <Button className=" bg-emerald-300">
              <Link href="/dashboard">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinksPage;
