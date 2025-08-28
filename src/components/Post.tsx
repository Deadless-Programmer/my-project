import Image from "next/image";
import React from "react";
import { CgCalendarDates } from "react-icons/cg";
import { FaComment } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";

const Post = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center  ">
        <h1 className="font-spectral text-3xl font-bold  absolute ">
          Trending Post
        </h1>
        <div className="bg-orange-400 py-1 w-48 mt-4 "></div>
      </div>

      <div className="py-12 flex flex-col-reverse justify-between md:flex-row gap-8   ">
        <div className=" flex flex-col gap-8 md:w-1/2 px-4 md:px-0">
          <div className="bg-white shadow-md p-6  space-y-4 ">
            <h3 className="font-spectral text-xl text-orange-500">Fashion</h3>
            <h1 className="font-spectral text-2xl font-bold">
              Understanding The Background Of Fashion
            </h1>
            <div className="flex gap-4 my-4">
              <div>
                <p className="font-quicksand flex items-center gap-2">
                  {" "}
                  <RiUserLine /> Alex Garry
                </p>
              </div>
              <p className="font-quicksand flex items-center gap-2">
                {" "}
                <CgCalendarDates /> 2 Feb 2019
              </p>
              <p className="font-quicksand flex items-center gap-2">
                {" "}
                <FaComment /> 2{" "}
              </p>
            </div>
            <p className="font-quicksand">
              Integer at faucibus urna. Nullam condimentum leo id elit sagittis
              auctor. Curabitur elementum nunc
            </p>
          </div>
          <div className="bg-white shadow-md p-6  space-y-4 ">
            <h3 className="font-spectral text-xl text-orange-500">Fashion</h3>
            <h1 className="font-spectral text-2xl font-bold">
              Understanding The Background Of Fashion
            </h1>
            <div className="flex gap-4 my-4">
              <div>
                <p className="font-quicksand flex items-center gap-2">
                  {" "}
                  <RiUserLine /> Alex Garry
                </p>
              </div>
              <p className="font-quicksand flex items-center gap-2">
                {" "}
                <CgCalendarDates /> 2 Feb 2019
              </p>
              <p className="font-quicksand flex items-center gap-2">
                {" "}
                <FaComment /> 2{" "}
              </p>
            </div>
            <p className="font-quicksand">
              Integer at faucibus urna. Nullam condimentum leo id elit sagittis
              auctor. Curabitur elementum nunc
            </p>
          </div>
          <div className="bg-white shadow-md p-6  space-y-4 ">
            <h3 className="font-spectral text-xl text-orange-500">Travel</h3>
            <h1 className="font-spectral text-2xl font-bold">
              30 Things to Do Before You Turn 30 Travel Bucket List
            </h1>
            <div className="flex gap-4 my-4">
              <div>
                <p className="font-quicksand flex items-center gap-2">
                  {" "}
                  <RiUserLine /> Alex Garry
                </p>
              </div>
              <p className="font-quicksand flex items-center gap-2">
                {" "}
                <CgCalendarDates /> 2 Feb 2019
              </p>
              <p className="font-quicksand flex items-center gap-2">
                {" "}
                <FaComment /> 2{" "}
              </p>
            </div>
            <p className="font-quicksand">
              Integer at faucibus urna. Nullam condimentum leo id elit sagittis
              auctor. Curabitur elementum nunc
            </p>
          </div>
        </div>
        <div className=" md:h-[650px] shadow-md p-5 md:p-0">
          <Image
            src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            width={630}
            height={650}
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Post;
