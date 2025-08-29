"use client";

import {useEffect, useRef} from "react";
import Link from "next/link";

const BASE_PATH = "/products/category/" as const;

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

const COLUMNS: {title: string; href: string; items: string[]}[] = [
  {
    title: "Cocinas y Hornos",
    href: "cocinas",
    items: ["Cocinas", "Hornos", "Microondas", "Purificadores", "Anafes"],
  },
  {
    title: "Climatización",
    href: "climatizacion",
    items: ["Aires acondicionados", "Calefacción", "Ventiladores"],
  },
  {title: "Termotanques", href: "termotanques", items: ["Eléctrico", "Gas"]},
  {
    title: "Heladeras / Freezers",
    href: "heladeras",
    items: ["Cava conservadora", "Heladeras", "Freezers", "Conservadores portátiles"],
  },
  {
    title: "Lavarropas/Secarropas",
    href: "lavarropas",
    items: ["Lavarropas", "Lavavajillas", "Secarropas"],
  },
  {
    title: "Herramientas",
    href: "herramientas",
    items: [
      "Amoladoras",
      "Bordeadoras",
      "Criques",
      "Desmalezadoras",
      "Hidrolavadoras",
      "Motosierras",
      "Set de Herramientas",
      "Grupo Electrógeno",
      "Taladros",
    ],
  },
  {title: "Deportes y Fitness", href: "deportes", items: ["Bicicletas"]},
  {
    title: "Belleza y cuidado personal",
    href: "belleza",
    items: [
      "Cortador de cabello",
      "Nebulizadores",
      "Secadores de pelo",
      "Planchas de Pelo",
      "Balanzas",
    ],
  },
  {
    title: "Pequeños Electros",
    href: "electros",
    items: [
      "Aspiradoras",
      "Batidoras",
      "Cafeteras",
      "Exprimidor de Cítricos",
      "Freidoras de aire",
      "Licuadoras",
      "Tostadoras",
      "Pava eléctrica",
      "Procesadoras",
      "Balanza de cocina",
      "Plancha para ropa",
    ],
  },
  {
    title: "Tecnología",
    href: "tecnologia",
    items: ["Celulares", "Audio", "Informática", "Televisores", "Proyectores"],
  },
  {title: "Colchones", href: "colchones", items: ["190 x 140", "190 x 100", "190 x 80"]},
  {title: "Aire libre", href: "airelibre", items: ["Piletas de Lona", "Reposeras"]},
  {title: "Textiles", href: "textiles", items: ["Acolchados", "Sabanas"]},
];

interface MegaMenuModalProps {
  open: boolean;
  onClose: () => void;
  rightHeader?: React.ReactNode;
}

export default function MegaMenuModal({open, onClose}: MegaMenuModalProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", onClick);

    return () => {
      document.removeEventListener("mousedown", onClick);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="absolute inset-0 top-50 z-50 flex items-start justify-center"
      onMouseLeave={onClose}
    >
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div
          ref={panelRef}
          aria-modal="true"
          className="mx-auto h-[70vh] max-w-[90%] overflow-y-auto rounded-xl border border-gray-200 bg-[#F6EBEC] shadow-2xl"
          role="dialog"
        >
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">Categorías</h2>
          </div>
          <div className="px-6">
            {/* Usamos columnas verticales que se llenan una debajo de la otra sin forzar simetría */}
            <div className="columns-2 gap-10 md:columns-3 lg:columns-4 xl:columns-6">
              {COLUMNS.map((col) => (
                <div key={col.title} className="mb-6 break-inside-avoid">
                  <h3 className="mb-2 font-semibold text-red-600">{col.title}</h3>
                  <ul className="space-y-1">
                    {col.items.map((item) => (
                      <li key={item}>
                        <Link
                          className="block rounded px-0.5 py-0.5 leading-6 text-gray-700 hover:text-gray-900 hover:underline focus:ring-2 focus:ring-red-500 focus:outline-none"
                          href={`${BASE_PATH}/${slugify(col.href)}`}
                          onClick={() => {
                            onClose();
                          }}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
