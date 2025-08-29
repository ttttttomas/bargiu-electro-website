"use client";
import { useRouter } from "next/navigation";

function ArrowBack() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6315 15.077L20.5834 24.0289C20.8879 24.3334 21.0353 24.6886 21.0255 25.0946C21.0158 25.5006 20.8582 25.8558 20.5529 26.1603C20.2476 26.4648 19.8924 26.617 19.4872 26.617C19.0821 26.617 18.7268 26.4648 18.4215 26.1603L9.04333 16.8126C8.79974 16.569 8.61705 16.2949 8.49525 15.9904C8.37346 15.686 8.31256 15.3815 8.31256 15.077C8.31256 14.7725 8.37346 14.468 8.49525 14.1635C8.61705 13.859 8.79974 13.585 9.04333 13.3414L18.4215 3.9632C18.726 3.65871 19.0865 3.51134 19.5031 3.52108C19.9196 3.53083 20.2797 3.68835 20.5834 3.99365C20.8871 4.29895 21.0393 4.65418 21.0401 5.05935C21.0409 5.46452 20.8887 5.81976 20.5834 6.12506L11.6315 15.077Z"
        fill="black"
      />
    </svg>
  );
}

export default function BotonVolver() {
  const router = useRouter();
  return (
    <button
      className="my-5 flex items-center gap-2 font-medium cursor-pointer"
      onClick={() => router.back()}
    >
      <ArrowBack />
      <p>Volver</p>
    </button>
  );
}
