"use client";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {useState} from "react";

import Logo from "@/components/ui/icons/Logo";
import ModalCategorys from "@/components/ui/ModalCategorys";

import ListProducts from "./ListProducts";

import Lupa from "@/components/ui/icons/Lupa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ModalCategorys open={open} onClose={handleClose} />
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
          <div className="flex items-center">
            <svg fill="none" viewBox="0 0 87 87" width="30" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.997 43.5143C17.9957 48.0474 19.1741 52.4737 21.4147 56.3751L17.7827 69.7049L31.3536 66.1281C35.1072 68.1821 39.3128 69.2584 43.5864 69.2587H43.5977C57.706 69.2587 69.1905 57.7187 69.1965 43.5346C69.1992 36.6614 66.5388 30.1982 61.7052 25.3357C56.8724 20.4736 50.4449 17.7946 43.5966 17.7914C29.4867 17.7914 18.003 29.3308 17.9972 43.5143"
                fill="url(#paint0_linear_53_457)"
              />
              <path
                d="M17.083 43.506C17.0815 48.2022 18.3021 52.7868 20.6226 56.8279L16.8604 70.6356L30.9179 66.9306C34.7912 69.0534 39.1521 70.1726 43.5897 70.1743H43.6011C58.2156 70.1743 70.1126 58.2192 70.1188 43.5273C70.1213 36.4071 67.3652 29.7117 62.3589 24.6749C57.352 19.6389 50.6947 16.8634 43.6011 16.8605C28.9841 16.8605 17.0888 28.8139 17.083 43.506ZM25.4547 56.1319L24.9298 55.2944C22.7234 51.7678 21.5587 47.6924 21.5604 43.5076C21.565 31.296 31.4519 21.3608 43.6094 21.3608C49.497 21.3633 55.03 23.6703 59.1917 27.8561C63.3531 32.0423 65.643 37.6071 65.6416 43.5256C65.6362 55.7373 55.749 65.6737 43.6011 65.6737H43.5924C39.6369 65.6716 35.7575 64.6039 32.3744 62.5861L31.5693 62.1061L23.2272 64.3046L25.4547 56.1319Z"
                fill="url(#paint1_linear_53_457)"
              />
              <path
                d="M36.9733 32.3664C36.477 31.2574 35.9546 31.235 35.4825 31.2156C35.096 31.1988 34.6541 31.2001 34.2126 31.2001C33.7708 31.2001 33.0528 31.3672 32.4459 32.0332C31.8385 32.6999 30.1267 34.311 30.1267 37.5877C30.1267 40.8645 32.5011 44.0314 32.8321 44.4762C33.1635 44.9202 37.4158 51.8597 44.1505 54.5293C49.7477 56.7479 50.8867 56.3067 52.1014 56.1954C53.3164 56.0846 56.0218 54.5848 56.5737 53.0295C57.1261 51.4745 57.1261 50.1415 56.9605 49.863C56.7949 49.5855 56.353 49.4188 55.6904 49.0859C55.0278 48.753 51.77 47.1415 51.1628 46.9192C50.5553 46.6971 50.1136 46.5863 49.6717 47.2531C49.2299 47.919 47.961 49.4188 47.5743 49.863C47.1879 50.3082 46.8012 50.3636 46.1388 50.0305C45.4758 49.6963 43.3419 48.9939 40.8102 46.7251C38.8405 44.9597 37.5107 42.7796 37.1242 42.1127C36.7376 41.4469 37.0828 41.0859 37.415 40.754C37.7127 40.4556 38.0778 39.9763 38.4094 39.5876C38.7398 39.1986 38.8501 38.9211 39.071 38.4769C39.2922 38.0323 39.1815 37.6434 39.0161 37.3102C38.8501 36.9771 37.5625 33.6832 36.9733 32.3664Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_53_457"
                  x1="2588.47"
                  x2="2588.47"
                  y1="5209.14"
                  y2="17.7914"
                >
                  <stop stopColor="#1FAF38" />
                  <stop offset="1" stopColor="#60D669" />
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint1_linear_53_457"
                  x1="2679.78"
                  x2="2679.78"
                  y1="5394.37"
                  y2="16.8605"
                >
                  <stop stopColor="#F9F9F9" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
            <small className="font-bold text-black/70 italic">11-5111-2131</small>
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <Lupa onClick={toggleMenu} />
          </div>
        </section>
        <section className="z-50 mx-5 flex flex-col items-center justify-around text-sm font-bold md:mx-0 md:flex-row md:text-lg">
          <p className="-z-50 hidden cursor-pointer text-lg md:block" onMouseEnter={handleOpen}>
            Categorías
          </p>
          <button
            className="-z-50 block cursor-pointer text-lg md:hidden"
            type="button"
            onClick={handleOpen}
          >
            Categorías
          </button>
          <Link href="/">
            <Logo fill="black" />
          </Link>
          <Link className="-z-50 cursor-pointer text-lg" href="/contact">
            Contacto
          </Link>
        </section>
        {isOpen && <ListProducts onChange={toggleMenu} />}
      </header>
    </>
  );
}
