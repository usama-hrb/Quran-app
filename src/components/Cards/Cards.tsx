
import QuranSurahs from "../data/QuranSurahs";

export default function Cards({ index, active, setActive }) {
  return (
    <section className="flex flex-col gap-2">
      {QuranSurahs.filter((_, i) => i % 3 == index).map((Surah) => (
        <div
          key={Surah.id}
          onClick={() => setActive(Surah.id)}
          className={`rounded-2xl cursor-pointer group overflow-hidden transition-all duration-150 flex flex-col w-[25rem] sm:w-[40rem] md:w-120 pb-5 border-b-1 border-[#DADADA] text-xl hover:border hover:border-gray-50 hover:scale-[1.03] hover:rounded-2xl ${active === Surah.id? "card-active" : ""}`}
        >
          <div className={`transform  ${active === Surah.id ? "translate-y-1" : ""} transition duration-300 px-5 pt-5`}>
            
          <div className="flex justify-between items-start ">
            <div className="flex gap-2 text-2xl">
              <p className={`text-[#6E6E6E] ${active === Surah.id ? "text-white" : ""}`} >{Surah.id}.</p>
              <h4 className="">{Surah.surahName}</h4>
            </div>
            <h4 dir="rtl" className="font-uthmani text-5xl">
              {Surah.surahNameArabic}
            </h4>
          </div>
          <div className={`flex justify-between text-[#6E6E6E] ${active === Surah.id ? "text-white" : ""}`}>
            <h4>{Surah.surahNameTranslation}</h4>
            <h5 className="" dir="ltr">
              {Surah.totalAyah} Verses
            </h5>
          </div>
          </div>
        </div>
      ))}
    </section>
  );
}
