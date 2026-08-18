import type { Metadata } from "next";
import Link from "next/link";
import { Container, Band } from "@/components/container";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Mi perfil",
  description:
    "Amparo Rozo — Comunicadora social y periodista, correctora profesional de estilo.",
};

const trayectoria = [
  "Revista Institucional Kminos, Instituto Nacional de Vías (Ministerio del Interior).",
  "Fundación Universitaria Cafam, en convenio con el Ministerio de Comercio, Industria y Turismo: corrección de planes de desarrollo turístico.",
  "Fundación Escuela Nueva Vida: producción de cartillas, periódicos, revistas y folletos.",
  "Revista cultural La Ruta.",
  "Revista Institucional del municipio de Subachoque.",
  "Novelas y textos de autores independientes.",
];

export default function PerfilPage() {
  return (
    <>
      <Band tone="rose" className="py-24">
        <Container>
          <h1 className="font-display text-4xl italic">Mi perfil</h1>
        </Container>
      </Band>

      <Container className="flex flex-col gap-6 py-16">
        <div>
          <p className="font-display text-xl font-bold">Amparo Rozo</p>
          <p className="text-muted">
            Comunicadora social y periodista, Universidad Externado de
            Colombia (1998).
          </p>
        </div>
        <p>
          Amplia experiencia en corrección de estilo de textos literarios,
          memorias, libros de crecimiento personal y libros especializados.
        </p>

        <div>
          <h2 className="font-display text-xl italic">Trayectoria editorial</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
            {trayectoria.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <p>
          Además de corregir, escribo.{" "}
          <Link href="/escritora" className="font-semibold text-teal underline">
            Conoce mis novelas →
          </Link>
        </p>

        <WhatsAppButton message="Hola Amparo, quiero información sobre corrección de estilo.">
          Escríbeme por WhatsApp
        </WhatsAppButton>
      </Container>
    </>
  );
}
