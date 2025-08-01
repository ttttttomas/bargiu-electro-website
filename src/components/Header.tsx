"use client";
import {usePathname} from "next/navigation";

import Logo from "@/components/ui/icons/Logo";
import Lupa from "@/components/ui/icons/Lupa";

export default function Header() {
  const path = usePathname();

  return (
    <header className={`absolute ${path !== "/" ? "relative" : ""} top-0 flex w-full flex-col`}>
      {path !== "/" && (
        <div
          className="absolute -z-10 h-full w-full opacity-40"
          style={{
            backgroundImage: `url(/bg-header.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      <section className="ml-2 flex justify-between pt-4 md:mx-5">
        <small className="font-bold text-black/70 italic">11-5111-2131</small>
        <div className="flex items-center gap-2">
          <Lupa />
          <input
            className="z-50 font-bold text-black italic"
            placeholder="¿Qué estás buscando?"
            type="text"
          />
        </div>
      </section>
      <section className="z-50 mx-5 flex items-center justify-around text-lg font-bold md:mx-0">
        <p className="-z-50 cursor-pointer">Categorías</p>
        <Logo fill="black" />
        <p className="-z-50 cursor-pointer">Contacto</p>
      </section>
    </header>
  );
}
