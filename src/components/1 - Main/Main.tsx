"use client";
import "../../app/globals.css";
import Link from "next/link";
import Cards from "../Cards/Cards";
import { useState } from "react";
import OrderCard from "../Cards/OrderCard";
import Ayah from "../Cards/Ayah";
import books from "../data/books";

export default function Main() {
  const [active, setActive] = useState("");
  const [activeq, setActiveq] = useState("");
  const [activeCard, setactiveCard] = useState("05");
  const [activeCardList, setactiveCardList] = useState("02");

  return (
    <main>
      {/* main section cover ... */}
      <div className="min-h-full w-full flex flex-col bg-[url('/quran-bg.svg')]  bg-cover bg-center bg-no-repeat font-Dm-sans rounded-4xl overflow-x-hidden">
        <div>
          <div className="ml-10 md:ml-25 lg:ml-27 2xl:ml-45 flex flex-col items-start">
            <h1 className="mt-25 md:mt-25 lg:mt-30 2xl:mt-40 font-bold text-[5.2vw] text-white">
              Quran, Podcasts, Fatwas
            </h1>
            <h1 className="text-[3.9vw] text-white">
              Discover Islam Anytime, Anywhere
            </h1>
          </div>
          {/* Circle divider */}
          <div className="mt-4 md-10 lg:mt-14 2xl:mt-18 flex items-center justify-center gap-2 md:gap-6 lg:gap-10 2xl:gap-15">
            <div className="w-1/3  2xl:w-[40%] border border-[#767676]" />
            <img src={"/circle.svg"} className="w-[2rem] md:w-fit " />
            <div className="w-1/3 2xl:w-[40%] border border-[#767676]" />
          </div>
          <p className="text-white text-center text-[1rem] md:text-[1.5rem] lg:text-[2rem] mt-4 md:mt-8 2xl:mt-17">
            Read Quran, listen to podcasts, get fatwas, and <br />
            learn Islam all in one place.
          </p>
          {/* Quran Player */}
          <div className="flex flex-col items-center md:flex-row mt-4 md:mt-8 2xl:mt-15 mb-7 md:mb-25 2xl:mb-40 justify-center gap-3 md:gap-10 2xl:gap-20">
            <div className="mb-8 md:mb-0 bg-white w-[80%] 2xl:w-120 h-35 md:h-52 rounded-2xl px-[20px] py-[6rem] md:py-[25px] font-Montserrat flex flex-col justify-center">
              <h3 className="text-[#6E7077]">Quran (Surah)</h3>
              <h3 className="text[#333333] mt-[.5] md:mt-1">
                Surah Al-Fatihah (Omar Al Kazabri)
              </h3>
              <div className="flex items-center mt-3 md:mt-4 2xl:mt-5">
                <div className="w-[50%] h-0 border border-[#039467]"></div>
                <div className="w-[9px] h-[9px] bg-[#039467] rounded-full"></div>
                <div className="w-[50%] h-0 border border-[#E8E8E8]"></div>
              </div>
              <div className="flex justify-between mt-1.5 md:mt-1.7 2xl:mt-2">
                <h4 className="text-[#6E7077]">01:32</h4>
                <h4 className="text-[#333333]">03:24</h4>
              </div>
              <div className="flex justify-between mt-2 md:3.5 2xl:mt-5">
                <img src="/repeat 1.svg" />
                <div className="flex gap-10">
                  <img className="w-4" src="/Vector-2.svg" />
                  <img className="w-6" src="/Vector.svg" />
                  <img className="w-4   " src="/Vector-1.svg" />
                </div>
                <img src="/shuffle 1.svg" />
              </div>
            </div>
            <div className="hidden md:hidden 2xl:block">
              <img src="/right-section.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Quran part */}
      <div className="mt-5 md:mt-8 lg:mt-12 2xl:mt-15 ml-8 2xl:ml-20">
        <h2 className="font-bold font-Dm-sans text-[4vw] md:text-[4vw] 2xl:text-[3vw] text-[#333333]">
          Embark on your journey of faith
        </h2>
        <h2 className="font-bold font-Dm-sans text-[4vw] md:text-[4vw] 2xl:text-[3vw] text-[#333333]">
          And understanding
        </h2>
        <div className="flex justify-between mt-5 2xl:mt-8">
          <div className="transition-all duration-150 flex justify-between gap-2 border px-1 py-1 rounded-full w-[40rem] md:w-[24rem] 2xl:w-[28rem] border-2 border-[#D1D1D1]">
            <button
              onClick={() => setActive("Surah")}
              className={`font-bold text-lg md:text-sm lg:text-base 2xl:text-lg flex-1 basis-0 rounded-full px-5 py-2 transition-all duration-300 ease-in-out ${
                active === "Surah" || active === "" ? "Active-seted" : ""
              } hover:flex-[2] hover:text-white hover:bg-[#004876]`}
            >
              Surah
            </button>
            <button
              onClick={() => setActive("Juz'")}
              className={`font-bold text-lg md:text-sm lg:text-base 2xl:text-lg flex-1 basis-0 rounded-full px-5 py-2 transition-all duration-300 ease-in-out ${
                active === "Juz'" ? "Active-seted" : ""
              } hover:flex-[2] hover:text-white hover:bg-[#004876]`}
            >
              Juz'
            </button>
            <button
              onClick={() => setActive("Order")}
              className={`whitespace-nowrap font-bold text-lg md:text-sm lg:text-base 2xl:text-lg flex-1 basis-0 rounded-full px-5 py-2 transition-all duration-300 ease-in-out ${
                active === "Order" ? "Active-seted" : ""
              } hover:flex-[2] hover:text-white hover:bg-[#004876]`}
            >
              Revelation Order
            </button>
          </div>
          <div className="hidden md:block relative mr-20">
            <img
              className="absolute top-1/5 left-5"
              src="/Search.svg"
              alt="Search"
            />
            <input
              className="transition-all duration-150 py-4 pl-16 rounded-full border-2 border-[#D1D1D1] w-[28rem] md:w-[15rem]  hover:border-[#004876] focus:border-[#004876] outline-none"
              type="text"
              placeholder="Input Surah/ayah"
            />
          </div>
        </div>
        <section className="mr-8 md:mr-20">
          <div className="flex justify-between pt-8 ">
            <h4 className="text-sm md:text-base 2xl:text-lg font-Montserrat">
              <span className="text-[#D1D1D1]">Sort by: </span> Ascending
            </h4>
            <div className="flex">
              <Link
                className="text-sm md:text-base 2xl:text-lg h-7 pl-50 pr-2 text-[#004876] underline"
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
          <div className="mt-4 md:mt-5 2xl:mt-8 flex justify-center w-full items-center xl:gap-5 2xl:gap-12 gap-10">
            <span className="lg:hidden">
              <OrderCard
                    active={activeCardList}
                    setActive={setactiveCardList}
                  />
            </span>
            <span className="hidden lg:block">
              <Cards index={0} active={activeCard} setActive={setactiveCard} />
            </span>
            <div className="hidden lg:block border border-[#DADADA] h-140 "></div>
            <span className="hidden lg:block" >
              <Cards index={1} active={activeCard} setActive={setactiveCard} />
            </span>
            <div className="hidden lg:block border border-[#DADADA] h-140"></div>
            <span className="hidden lg:block">
              <Cards index={2} active={activeCard} setActive={setactiveCard} />
            </span>
          </div>

          {/*  Second section */}
          {/* <div className=" px-25 p-15 flex flex-col mt-24 w-full h-screen bg-[#D9E6EE] rounded-4xl ">
            <h2 className="font-bold font-Dm-sans text-[5vw] text-[#333333]">
              Hear Islamic Podcasts
            </h2>
            <div className="flex justify-between items-center">
              <h2 className="font-bold font-Dm-sans text-[5vw] text-[#333333]">
                And, the Quran.
              </h2>
              <div className="transition-all duration-150 flex justify-between ite gap-4 px-1 py-1 rounded-full w-[40rem] h-[5rem] border-4 border-[#004876]">
                <button
                  onClick={() => setActiveq("Quran")}
                  className={`font-bold text-2xl flex-1 basis-0 rounded-full px-5 py-2 transition-all duration-300 ease-in-out ${
                    activeq === "Quran" || activeq === "" ? "Active-seted" : ""
                  } hover:flex-[2] hover:text-white hover:bg-[#004876]`}
                >
                  Quran
                </button>
                <button
                  onClick={() => setActiveq("Podcast")}
                  className={`font-bold text-2xl flex-1 basis-0 rounded-full px-5 py-2 transition-all duration-300 ease-in-out ${
                    activeq === "Podcast" ? "Active-seted" : ""
                  } hover:flex-[2] hover:text-white hover:bg-[#004876]`}
                >
                  Podcast
                </button>
                <button
                  onClick={() => setActiveq("Books")}
                  className={`whitespace-nowrap font-bold text-2xl flex-1 basis-0 rounded-full px-5 py-2 transition-all duration-300 ease-in-out ${
                    activeq === "Books" ? "Active-seted" : ""
                  } hover:flex-[2] hover:text-white hover:bg-[#004876]`}
                >
                  Books
                </button>
              </div>
            </div>
            <div className="flex h-screen justify-between gap-3">
              <div className="flex flex-col items-center justify-between w-[45%] h-[55%]  gap-5">
                <div className="select-none flex flex-col items-center w-[98%] overflow-y-scroll overflow-x-hidden scroll-smooth custom-scrollbar">
                  <OrderCard
                    active={activeCardList}
                    setActive={setactiveCardList}
                  />
                </div>
                <div className="flex gap-3">
                  <a className="underline text-xl text-[#004876]" href="#">
                    See All Surahs
                  </a>
                  <img src="/Arrow.svg" alt="" />
                </div>
              </div>
              <div className="flex justify-between w-[55%] h-[50%]">
                <div className="w-[98%] px-5">
                  <div className="flex flex-col border-b-3 pb-4 border-[#B8C2C8] ">
                    <h5 className="font-medium text-4xl text-[#333333]">
                      Reciter
                    </h5>
                    <p className="text-[#696969] text-2xl font-medium ">
                      Omar Al Kazabri{" "}
                      <span className="text-[#004876] underline">
                        <a href="#"> (Change)</a>
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-center items-center flex-col h-[100%]">
                    <div className="mt-5 h-[50%] overflow-x-hidden overflow-y-scroll scroll-smooth custom-scrollbar">
                      <div className="px-10">
                        <Ayah />
                      </div>
                    </div>
                    <div className="mt-5 bg-white w-[90%] h-auto rounded-2xl px-8 py-6 font-Montserrat flex flex-col justify-center">
                      <h3 className="text[#333333] font-medium">
                        Surah Al-Fatihah (Omar Al Kazabri)
                      </h3>
                      <div className="flex items-center mt-3">
                        <div className="w-[50%] h-0 border border-[#039467]"></div>
                        <div className="w-[9px] h-[9px] bg-[#039467] rounded-full"></div>
                        <div className="w-[50%] h-0 border border-[#E8E8E8]"></div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <h4 className="text-[#6E7077]">01:32</h4>
                        <h4 className="text-[#333333]">03:24</h4>
                      </div>
                      <div className="flex justify-between mt-3">
                        <img src="/repeat 1.svg" />
                        <div className="flex gap-10">
                          <img className="w-4" src="/Vector-2.svg" />
                          <img className="w-6" src="/Vector.svg" />
                          <img className="w-4   " src="/Vector-1.svg" />
                        </div>
                        <img src="/shuffle 1.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Boooks section */}

          {/* <div className="px-25 p-0 flex flex-col mt-20 w-full h-screen justify-center">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-bold font-Dm-sans text-[4vw] text-[#333333]">
                Read Islamic Books
              </h2>
              <button className="cursor-pointer ">
                <div className="flex gap-3 bg-[#004876] px-5 py-2 rounded-full">
                  <p className="text-white">See All Books</p>
                  <img
                    className="filter invert brightness-200 grayscale "
                    src="/Arrow.svg"
                    alt=""
                  />
                </div>
              </button>
            </div>
            <div className="flex flex-wrap gap-5 justify-center">
              {books.map((book) => (
                <div className="flex flex-col" key={book.id}>
                  <img
                    src={book.image}
                    alt="book image"
                    className="transition-all duration-150 hover:scale-[1.03]"
                  />
                  <div className="group transition-all duration-150 rounded-full py-2 m-5 flex gap-3 bg-[#004876] items-center justify-center hover:scale-[1.03] hover:border-1 hover:border-black hover:bg-white ">
                    <button className="transition-ll duration-150 text-white group-hover:text-black">
                      Read now
                    </button>
                    <img
                      src="/Arrow_w.svg"
                      alt="arrow"
                      className="filter group-hover:invert"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </section>
      </div>
    </main>
  );
}
