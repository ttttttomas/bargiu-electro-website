export default function ProductIdPage({params}: {params: {id: string}}) {
  const {id} = params;

  console.log(id);

  return (
    <main className="mx-20 flex flex-col items-start justify-center">
      <p className="my-10 font-medium">Volver</p>
      <section className="mx-auto flex w-full flex-col justify-center gap-32 rounded-lg bg-red-50 p-4 md:flex-row">
        {/* Column Left: Thumbnails + Main Image */}
        <div className="flex items-end gap-2">
          {/* Thumbnails */}
          <div className="flex gap-2 md:flex-col">
            <img
              alt="Miniatura 1"
              className="h-24 w-64 rounded-xl border object-cover"
              src="/logo.png"
            />
            <img
              alt="Miniatura 2"
              className="h-24 w-64 rounded-xl border object-cover"
              src="/logo.png"
            />
            <img
              alt="Miniatura 3"
              className="h-24 w-64 rounded-xl border object-cover"
              src="/logo.png"
            />
            <img
              alt="Miniatura 4"
              className="h-24 w-64 rounded-xl border object-cover"
              src="/logo.png"
            />
          </div>

          {/* Main Image */}
          <div className="relative mt-2 h-full">
            <small className="bg-secondary absolute top-2 left-2 rounded-xl px-4 py-1 text-[10px] font-bold text-white italic">
              SIN STOCK
            </small>
            <img
              alt="Aire acondicionado Enova"
              className="h-full w-full rounded-xl border object-cover"
              src="/logo.png"
            />
          </div>
        </div>

        {/* Column Right: Info */}
        <div className="flex flex-col items-center justify-center gap-4 p-2">
          <div className="flex flex-col gap-3">
            <p className="text-center text-xl font-semibold">
              Aire acondicionado Split 2356KL FC Inverter Midea Carrier
            </p>
            <p className="text-secondary text-center text-5xl font-bold">$879.000</p>
          </div>

          <button className="mt-2 w-fit rounded-lg border-2 px-14 py-2 font-medium text-black">
            SIN STOCK
          </button>
        </div>
      </section>
      <section className="my-20 flex flex-col">
        <h1 className="text-xl font-medium">Descripción</h1>
        <ul>
          <li>Marca: Enova</li>
          <li>Color: Blanco</li>
          <br />
          <li>Ancho: 77,7 cm</li>
          <li>Profundidad: 77,7 cm</li>
          <li>Altura: 77,7 cm</li>
          <br />
          <ul className="flex flex-col gap-5">
            <li>
              Características generales: Climatizar tus espacios a lo largo del año es sin duda algo
              importante para tu comodidad y la de tus seres queridos. Contar con un aire
              acondicionado con función frío/calor es la mejor decisión. Con este aire Enova
              conseguí una mejor relación costo-beneficio.
            </li>
            <li>
              Diseño adecuado a tus espacios. El tipo de aire split es de bajo consumo energético,
              de fácil mantenimiento y sumamente silencioso ya que cuenta con una unidad exterior.
            </li>
            <li>
              Reducción de humedad: El deshumidificador absorbe el agua del aire y disminuye la
              molesta humedad, creando un ambiente confortable y de calidad.
            </li>
            <li>
              Programá de acuerdo a tus necesidades: Cuando las personas descansan su temperatura
              corporal baja gradualmente. Por eso, este aire cuenta con la función sleep, que hace
              que la temperatura del ambiente aumente a medida que pasa el tiempo. No tendrás que
              levantarte a apagarlo y podrás disfrutar de un sueño placentero.
            </li>
          </ul>
        </ul>
      </section>
    </main>
  );
}
