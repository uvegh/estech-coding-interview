"use client";
import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

import { analytics } from "../services";
import { useRouter } from "next/navigation";

function Page() {

  // const router = useRouter();
 

  useEffect(() => {
  
analytics.page({
  path:'/home',
  title:'homepage viewed',
  
})
    
  }, []);
  return (
    <>
     

    
      <div className="bg-grey-200 min-h-screen ">
        <section className=" mx-auto">
          
        </section>
        <section className="">
          <div className="bg-white  max-sm:rounded-[0] rounded-[1.3rem] text-primary-blue text-xl mx-auto mt-16 my-auto min-h-[50%] max-lg:min-h-fit lg:min-h-[15em] max-sm:w-full w-[90%] max-sm:rounded-0 overflow-auto">
            <div className="overflow-hidden ">
              <header className="flex justify-between  max-sm:flex-col w-[95%] mx-auto text-black font-semibold h-20 items-center">
                <p className="text-xl max-lg:text-lg text max-sm:mt-5">Work  experience <br /><span className="text-light text-sm italic">Save your meeting recordings,transcriptions and retrieve analytics anytime coming soon... </span></p>
                <p className="text-xl text-primary-success max-sm:hidden flex items-center max-lg:text-sm hover:underline">
                  See more <span className="max-sm:hidden"> <IoIosArrowForward /></span> {" "}
                </p>
              </header>
             

<div className="relative overflow-auto text-primary-blue max-sm:mt-10">
    <table className="w-full text-sm lg:text-xl text-left rtl:text-right  dark:text-gray-400">
        <thead className="text-xs   uppercase  dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                   Date
                </th>
                <th scope="col" className="px-6 py-3">
                    company Name
                </th>
                <th scope="col" className="px-6 py-3">
                   Duration
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
               
                </th>
                <td className="px-6 py-4">
                
                </td>
                <td className="px-6 py-4">
              
                </td>
                <td className="px-6 py-4 ">
                <button
                        type="button"
                        className=" align-text-middle  border-primary-success focus:ring-4 focus:outline-none focus:ring-blue-300 border text-primary-success  px-4 py-1 text-center rounded-2xl   "
                      >
                        View Details
                      </button>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

            </div>
          </div>
          ​
        </section>
      
      </div>
    </>
  );
}

export default Page;
