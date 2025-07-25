import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutDescription() {
  return (
    <div className="mb-12 grid grid-cols-1 md:grid-cols-12 gap-8 p-8 rounded-3xl bg-[#fafafa]">
      <div className="md:col-span-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🎙️</span>
          <span className="text-sm font-medium uppercase text-rccg-dark-blue">
            Who are we
          </span>
        </div>

        <h1
          className={`text-3xl md:text-[48px] font-bold ${anton.className} mt-8`}
        >
          <div className="text-[#121935]">ABOUT</div>
          <div>
            <span className="text-[#121935]">RCCG </span>
            <span className="text-[#DEC360]">SGLG</span>
          </div>
        </h1>
      </div>

      <div className="md:col-span-8 text-rccg-dark-blue text-sm tracking-wide  md:text-lg py-2 leading-[150%]">
        <p>
          The Redeemed Christian Church of God, Shekhinah Glory of the Living
          God, a family church is a branch of The Redeemed Christian Church of
          God worldwide, which was established in 1952 by Pa. Josiah Akindayomi.
          Pastor E.A Adeboye took over as the General Overseer in 1981. Since
          then the church continues to enjoy open explosion, growing in leap and
          bound throughout the world. We are situated in the heart of Greater
          London, where we run services and teachings that are suitable for
          people of all ages. RCCG SGLG is a dynamic church and believe in
          preaching the word in a simple and straightforward manner. Our
          watchword is Jesus Christ, the same yersterday, today and forever.
          (Heb. 13: 8). <br /> I invite you to worship with us and discover the
          riches of God&#39;s glory through genuine worship and sound biblical
          teachings.
        </p>
      </div>
    </div>
  );
}
