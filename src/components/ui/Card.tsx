import {openSans} from "@/app/layout";

export default function Card() {
  return (
    <section className={`w-88 flex-col items-center ${openSans.className}`}>
      <div className="relative">
        <small className="bg-secondary absolute top-2 left-2 rounded-xl px-4 py-1 text-[10px] font-bold text-white italic">
          SIN STOCK
        </small>
        <img
          alt="card"
          className="h-62 w-full rounded-2xl border border-black object-cover"
          src="/card-image.png"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 px-5 py-2">
        <p className="text-center font-semibold">
          Aire acondicionado Split 2356KL FC Inverter Midea Carrier
        </p>
        <b className="text-secondary text-3xl">$879.000</b>
      </div>
    </section>
  );
}
