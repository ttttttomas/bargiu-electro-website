"use client";
import {useState} from "react";

import Popup from "@/components/ui/Popup";

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowPopup(true);
    console.log("enviado");
  };

  return (
    <main className="mx-auto my-20 flex w-2/3 items-center justify-center border bg-white">
      {showPopup && <Popup />}
      <form
        className="flex w-full flex-col items-center justify-center gap-4 p-14"
        onSubmit={handleSubmit}
      >
        <section className="flex w-full items-center justify-between gap-20 px-30">
          <h1 className="text-4xl font-medium italic">Contactanos</h1>
          <img alt="logo" className="w-40 object-cover" src="/logo.png" />
        </section>
        <section className="flex w-full flex-col gap-5">
          <label className="w-full text-xl" htmlFor="nombre">
            Nombre y apellido *
          </label>
          <input className="w-full border-b p-1" id="nombre" placeholder="Nombre" type="text" />
          <label className="w-full text-xl" htmlFor="email">
            Email *
          </label>
          <input className="w-full border-b p-1" id="email" placeholder="Email" type="email" />
          <label className="w-full text-xl" htmlFor="mensaje">
            Escribí tu consulta *
          </label>
          <textarea className="border-b" id="mensaje" placeholder="Mensaje" rows={10}></textarea>
        </section>
        <button
          className="bg-secondary w-full cursor-pointer rounded-lg border-2 border-black py-1 text-xl font-bold text-white"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}
