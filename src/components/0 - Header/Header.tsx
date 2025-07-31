import "../../app/globals.css";

export default function Header() {
  return (
    <header className="flex gap-2 items-center absolute right-9 h-25">
    {/* // <header className="flex gap-2 items-center absolute top-0 right-4 h-20 z-50">  */}
      <nav className="flex gap-2 border border-white px-2 py-1 rounded-2xl">
        <button className="text-white font-semibold cursor-pointer ">
          dark
        </button>
        <button className="text-zinc-800 bg-white rounded-lg px-2 cursor-pointer ">
          light
        </button>
      </nav>
      <button className="bg-[#D99F2F] px-4 py-2 rounded-full border-2 border-white text-[#001C2D]  duration-[200ms] font-semibold cursor-pointer
                          hover:bg-[#1F1F1F] hover:text-white">
        Register
      </button>
      <button className="px-4 py-2 rounded-full border-2 border-white text-white font-semibold transition-all duration-[200ms] cursor-pointer
                        hover:bg-[#D99F2F] hover:text-[#1F1F1F]">
        Sign in
      </button>
    </header>
  );
}
