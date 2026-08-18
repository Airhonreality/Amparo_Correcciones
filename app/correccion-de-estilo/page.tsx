import type { Metadata } from "next";
import Link from "next/link";
import { Container, Band } from "@/components/container";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Corrección de estilo literario",
  description:
    "Servicio integral de corrección de estilo para novelas, memorias, crónicas y libros especializados. Sin inteligencia artificial.",
};

const compromiso = [
  "Repeticiones, redundancias, localismos, ambigüedades, erratas y cacofonías.",
  "Oraciones confusas: las reescribo en un lenguaje claro y estructurado (sintaxis).",
  "Errores de puntuación, ortográficos, léxicos y gramaticales. Uso correcto del vocabulario.",
  "Ortotipografía: comillas, guiones, rayas, paréntesis, voladitas, siglas, itálicas, versalitas.",
  "Párrafos, sangrías, fuente.",
  "Normas APA (para libros especializados).",
];

const novelas = [
  "Construcción de personajes tridimensionales: lenguaje acorde, características físicas y personalidad.",
  "Diálogos: uso correcto de rayas, incisos y comillas.",
  "Continuidad lógica de la historia.",
  "Trama: coherencia en los hechos.",
  "Uso correcto de tiempos verbales.",
  "Lectura crítica y comentarios.",
];

export default function CorreccionDeEstiloPage() {
  return (
    <>
      <Band tone="cream" className="py-16">
        <Container className="flex flex-col gap-3 text-center">
          <h1 className="font-display text-4xl italic">Corrección de estilo literario</h1>
          <p className="text-lg text-muted">
            Servicio integral de corrección de estilo — novelas, memorias,
            crónicas, libros especializados y de crecimiento personal.
          </p>
        </Container>
      </Band>

      <Container className="grid gap-10 py-16 sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-2xl italic">Mi compromiso</h2>
          <p className="font-semibold">Corrijo:</p>
          <ul className="list-disc space-y-4 pl-5 text-sm leading-relaxed text-ink/90">
            {compromiso.map((item) => (
              <li key={item} className="pl-1 marker:text-teal">{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-semibold">Además, en el caso de novelas:</p>
          <ul className="list-disc space-y-4 pl-5 text-sm leading-relaxed text-ink/90">
            {novelas.map((item) => (
              <li key={item} className="pl-1 marker:text-teal">{item}</li>
            ))}
          </ul>
          <p className="text-sm text-muted">
            Otros servicios: diagramación del libro y diseño de portada
            (realizados por un diseñador gráfico).
          </p>
        </div>
      </Container>

      <Band tone="bg-alt" className="py-16">
        <Container className="flex flex-col gap-4">
          <h2 className="font-display text-2xl italic">
            ¿Por qué un corrector humano y no una IA?
          </h2>
          <p>
            El software no diferencia el uso de la tilde diacrítica en
            palabras como <em>cuánto/cuanto</em>, <em>qué/que</em> o{" "}
            <em>dónde/donde</em>, cuya aplicación cambia el significado de la
            frase. Tampoco reconoce expresiones coloquiales, ni detecta
            incoherencias de la trama, situaciones inverosímiles o errores de
            contenido como fechas y lugares que no cuadran.
          </p>
          <p className="font-semibold">
            No es solo una preferencia mía: el 57% de los autores en español
            rechaza el uso de la inteligencia artificial para escribir o
            corregir su obra (CEDRO).
          </p>
        </Container>
      </Band>

      <Container className="py-16">
        <div className="rounded-xl bg-rose-light p-10 md:p-12">
          <h2 className="font-display text-xl italic">Confidencialidad</h2>
          <p className="mt-2">
            Si lo deseas, firmamos un acuerdo de confidencialidad del material
            a corregir, con la certeza de que no pasará a terceros ni será
            divulgado sin tu autorización.
          </p>
        </div>
      </Container>

      <Band tone="cream" className="py-16">
        <Container className="flex flex-col gap-4 text-center">
          <h2 className="font-display text-2xl italic">Inversión</h2>
          <p>
            $23 COP por palabra. Sin paquetes cerrados: el precio se calcula
            sobre el conteo exacto de palabras de tu manuscrito.
          </p>
          <p className="text-muted">
            Por ejemplo, una novela de 70.000 palabras tiene una inversión
            aproximada de $1.610.000 COP.
          </p>
          <Link
            href="/cuanto-cuesta-corregir-un-libro"
            className="font-semibold text-teal underline"
          >
            Ver el detalle completo de precios →
          </Link>
          <div className="mt-2 flex justify-center">
            <WhatsAppButton message="Hola Amparo, quiero enviarte mi manuscrito para que lo corrijas.">
              Escríbeme por WhatsApp
            </WhatsAppButton>
          </div>
        </Container>
      </Band>
    </>
  );
}
