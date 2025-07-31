"use client";
import "../../app/globals.css";
import Link from "next/link";
import Cards from "../Cards/Cards";
import { useState } from "react";

export default function Main() {
  const [active, setActive] = useState("");
  const [activeCard, setactiveCard] = useState("05");

  return (
    <main>
      {/* main section cover ... */}
      <div className="min-h-screen w-full flex flex-col bg-[url('/quran-bg.svg')]  bg-size-[100%] bg-center bg-no-repeat font-Dm-sans rounded-4xl">
        <div>
          <div className="ml-45 flex flex-col items-start">
            <h1 className="mt-40 font-bold text-[5.2vw] text-white">
              Quran, Podcasts, Fatwas
            </h1>
            <h1 className="text-[3.9vw] text-white">
              Discover Islam Anytime, Anywhere
            </h1>
          </div>
          <div className="mt-18 flex items-center justify-center gap-[35px] mt-6">
            <div className="w-[40%] border border-[#767676]" />
            <img src={"/circle.svg"} className="w-fit" />
            <div className="w-[40%] border border-[#767676]" />
          </div>
          <p className="text-white text-center text-4xl mt-17">
            Read Quran, listen to podcasts, get fatwas, and <br />
            learn Islam all in one place.
          </p>
          <div className="flex mt-15 mb-40 justify-center gap-20">
            <div className="bg-white w-120 h-52 rounded-2xl px-[20px] py-[25px] font-Montserrat flex flex-col justify-center">
              <h3 className="text-[#6E7077]">Quran (Surah)</h3>
              <h3 className="text[#333333] mt-1">
                Surah Al-Fatihah (Omar Al Kazabri)
              </h3>
              <div className="flex items-center mt-5">
                <div className="w-[50%] h-0 border border-[#039467]"></div>
                <div className="w-[9px] h-[9px] bg-[#039467] rounded-full"></div>
                <div className="w-[50%] h-0 border border-[#E8E8E8]"></div>
              </div>
              <div className="flex justify-between mt-2">
                <h4 className="text-[#6E7077]">01:32</h4>
                <h4 className="text-[#333333]">03:24</h4>
              </div>
              <div className="flex justify-between mt-5">
                <img src="/repeat 1.svg" />
                <div className="flex gap-10">
                  <img className="w-4" src="/Vector-2.svg" />
                  <img className="w-6" src="/Vector.svg" />
                  <img className="w-4   " src="/Vector-1.svg" />
                </div>
                <img src="/shuffle 1.svg" />
              </div>
            </div>
            <div>
              <img src="/right-section.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Quran part */}
      <div className="mt-15 ml-20">
        <h2 className="font-bold font-Dm-sans text-[3vw] text-[#333333]">
          Embark on your journey of faith
        </h2>
        <h2 className="font-bold font-Dm-sans text-[3vw] text-[#333333]">
          And understanding
        </h2>
        <div className="flex justify-between mt-8">
          <div className="transition-all duration-150 flex justify-between gap-2 border px-2 py-2 rounded-full w-[28rem] border-2 border-[#D1D1D1]">
            <button
              onClick={() => setActive("Surah")}
              className={`font-bold text-lg flex-1 basis-0 rounded-full px-5 py-2 transition-all duration-300 ease-in-out ${
                active === "Surah" || active === "" ? "Active-seted" : ""
              } hover:flex-[2] hover:text-white hover:bg-[#004876]`}
            >
              Surah
            </button>
            <button
              onClick={() => setActive("Juz'")}
              className={`font-bold text-lg flex-1 basis-0 rounded-full px-5 py-2 transition-all duration-300 ease-in-out ${
                active === "Juz'" ? "Active-seted" : ""
              } hover:flex-[2] hover:text-white hover:bg-[#004876]`}
            >
              Juz'
            </button>
            <button
              onClick={() => setActive("Order")}
              className={`whitespace-nowrap font-bold text-lg flex-1 basis-0 rounded-full px-5 py-2 transition-all duration-300 ease-in-out ${
                active === "Order" ? "Active-seted" : ""
              } hover:flex-[2] hover:text-white hover:bg-[#004876]`}
            >
              Revelation Order
            </button>
          </div>
          <div className="relative mr-20">
            <img
              className="absolute top-1/5 left-6"
              src="/Search.svg"
              alt="Search"
            />
            <input
              className="transition-all duration-150 py-4 pl-16 rounded-full border-2 border-[#D1D1D1] w-[28rem]  hover:border-[#004876] focus:border-[#004876] outline-none"
              type="text"
              placeholder="Input your reading preferences"
            />
          </div>
        </div>
        <section className="mr-20">
          <div className="flex justify-between pt-8 ">
            <h4 className="text-lg font-Montserrat">
              <span className="text-[#D1D1D1]">Sort by: </span>  Ascending
            </h4>
            <div className="flex">
              <Link
                className="h-7 pl-50 pr-2 text-[#004876] underline"
                href={"#"}
              >
                See All Surahs
              </Link>
              <img src="/Arrow.svg" alt="Arrow" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-[35px]">
            <div className="w-[50%] border-[1.5] border-[#D1D1D1]" />
            <img src={"/dark-circle.svg"} className="w-fit" />
            <div className="w-[50%] border-[1.5] border-[#D1D1D1]" />
          </div>
          <div className="mt-14 flex justify-center w-full items-center gap-10">
            <Cards index={0} active={activeCard} setActive={setactiveCard} />
            <div className="border border-[#DADADA] h-140 "></div>
            <Cards index={1} active={activeCard} setActive={setactiveCard} />
            <div className="border border-[#DADADA] h-140"></div>
            <Cards index={2} active={activeCard} setActive={setactiveCard}/>
          </div>
        </section>
      </div>
    </main>
  );
}
