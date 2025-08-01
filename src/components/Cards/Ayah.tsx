import Ayahs from "../data/ayahs";

const Ayah = () => {
    return (
        <section className="flex flex-col gap-2">
            {Ayahs.map((Ayah) => (
                <div key={Ayah.ayah} className="mt-5 flex flex-col gap-5">
                    <p className="font-uthmani text-5xl" dir="rtl">{Ayah.arabic1}</p>
                    <p className="text-2xl">{Ayah.english}</p>
                </div>
            ))}
        </section>
    );
}

export default Ayah 