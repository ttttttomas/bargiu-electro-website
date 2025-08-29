"use client";
import axios from "axios";
import {useState} from "react";
<<<<<<< HEAD
import {useForm} from "react-hook-form";
import {Toaster, toast} from "sonner";
=======
import axios from "axios";
>>>>>>> 1243bbd38c9f3328dc48dc1e32f74d030535e023

import Popup from "@/components/ui/Popup";

export default function ContactPage() {
  const {register, handleSubmit} = useForm();
  const [showPopup, setShowPopup] = useState(false);
<<<<<<< HEAD

  const onSubmit = handleSubmit((data) => {
    try {
      void axios.post(
        "https://mdpuf8ksxirarnlhtl6pxo2xylsjmtq8-barelectro-api.bargiuelectro.com/contact/formContact",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      setShowPopup(true);
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      toast.error("Error al enviar formulario");
    }
  });
=======
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value});
  };
  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value});
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    try {
      axios.post(
        "https://mdpuf8ksxirarnlhtl6pxo2xylsjmtq8-barelectro-api.bargiuelectro.com/contact/formContact",
        formData,
      );
      setShowPopup(true);
    } catch (error) {
      console.log(error);
    }
  };
>>>>>>> 1243bbd38c9f3328dc48dc1e32f74d030535e023

  return (
    <main className="mx-auto my-20 flex w-2/3 items-center justify-center border bg-white">
      <Toaster richColors position="bottom-center" />
      {showPopup && <Popup />}
      <form
        className="flex w-full flex-col items-center justify-center gap-4 p-14"
        onSubmit={(e) => {
          e.preventDefault();
          void onSubmit(e);
        }}
      >
        <section className="flex w-full flex-col items-center justify-between gap-10 md:flex-row md:gap-20 md:px-30">
          <h1 className="text-4xl font-medium italic">Contactanos</h1>
          <img alt="logo" className="object-cover md:w-40" src="/logo.png" />
        </section>
        <section className="flex w-full flex-col gap-5">
          <label className="w-full text-xl" htmlFor="nombre">
            Nombre y apellido *
          </label>
          <input
<<<<<<< HEAD
            {...register("full_name")}
            className="w-full border-b p-1"
            id="name"
            placeholder="Nombre"
            type="text"
=======
            className="w-full border-b p-1"
            id="nombre"
            name="full_name"
            placeholder="Nombre"
            type="text"
            onChange={onChange}
>>>>>>> 1243bbd38c9f3328dc48dc1e32f74d030535e023
          />
          <label className="w-full text-xl" htmlFor="email">
            Email *
          </label>
          <input
<<<<<<< HEAD
            {...register("email")}
            className="w-full border-b p-1"
            id="email"
            placeholder="Email"
            type="email"
=======
            className="w-full border-b p-1"
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            onChange={onChange}
>>>>>>> 1243bbd38c9f3328dc48dc1e32f74d030535e023
          />
          <label className="w-full text-xl" htmlFor="mensaje">
            Escribí tu consulta *
          </label>
          <textarea
            className="border-b"
            id="mensaje"
<<<<<<< HEAD
            placeholder="Mensaje"
            rows={10}
            {...register("message")}
=======
            name="message"
            placeholder="Mensaje"
            rows={10}
            onChange={onChangeTextarea}
>>>>>>> 1243bbd38c9f3328dc48dc1e32f74d030535e023
          ></textarea>
        </section>
        <button
          className="bg-secondary w-full cursor-pointer rounded-lg py-1 text-xl font-bold text-white"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}
