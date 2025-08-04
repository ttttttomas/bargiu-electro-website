import Link from "next/link";

export default function Popup() {
  return (
    <section className="fixed top-0 left-0 flex h-full w-full items-center justify-center">
      <div className="absolute top-0 left-0 z-0 h-full w-full bg-black opacity-50" />
      <div className="z-20 flex flex-col items-center justify-between gap-8 rounded-2xl bg-white p-15">
        <p>¡ 📩 Su mensaje fue enviado correctamente ✅ !</p>
        <p>¡Gracias por enviarnos su consulta. Nos comunicaremos a la brevedad!</p>
        <Link href="/">
          <img alt="Logo" src="/logo.png" width={100} />
        </Link>
        <small className="text-gray-500">Hace click para volver al inicio</small>
      </div>
    </section>
  );
}
