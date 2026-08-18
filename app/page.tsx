import Link from "next/link";
import { Container, Band } from "@/components/container";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { getFeaturedTestimonial } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export default async function Home() {
  const testimonial = await getFeaturedTestimonial();

  return (
    <>
      <Band tone="cream" className="py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h1 className="font-display text-4xl italic text-ink sm:text-5xl">
            Su texto está en buenas manos.
          </h1>
          <p className="max-w-xl text-lg text-muted">
            Corrección de estilo para novelas, memorias, crónicas y libros de
            crecimiento personal — hecha a mano, palabra por palabra, por una
            escritora y periodista. Sin inteligencia artificial.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Hola Amparo, quiero información sobre corrección de estilo.">
              Escríbeme por WhatsApp
            </WhatsAppButton>
            <Link
              href="/portafolio"
              className="inline-flex h-12 items-center justify-center rounded-md border-2 border-anchor px-6 font-semibold text-anchor transition-colors hover:bg-anchor hover:text-cream"
            >
              Ver portafolio de libros corregidos
            </Link>
          </div>
        </Container>
      </Band>

      <Container className="mx-auto flex max-w-[800px] flex-col gap-6 py-16">
        <p className="text-lg leading-relaxed">
          La corrección de estilo dota a tu manuscrito de claridad, precisión,
          expresividad y el tono adecuado, para que la lectura sea fluida,
          armónica y entretenida — y tus lectores disfruten cada página.
        </p>
        <div>
          <p className="font-display text-xl font-bold uppercase tracking-wide">
            Amparo Rozo
          </p>
          <p className="text-muted">
            Comunicadora social y periodista (Universidad Externado de
            Colombia), correctora profesional de estilo y escritora. Autora de
            dos novelas publicadas por editorial.
          </p>
        </div>
        <p>
          Reviso tu manuscrito palabra por palabra: sintaxis, ortotipografía,
          coherencia narrativa y mucho más.{" "}
          <Link href="/correccion-de-estilo" className="font-semibold text-teal underline">
            Ver todo lo que incluye →
          </Link>
        </p>
      </Container>

      {testimonial && (
        <Band tone="bg-alt" className="py-16">
          <Container>
            <blockquote className="rounded-lg bg-blue-pastel p-8 font-display italic text-ink">
              <p className="text-lg">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-4 not-italic font-sans text-sm text-muted">
                — {testimonial.clientName}, autor de {testimonial.bookTitle}
              </footer>
            </blockquote>
          </Container>
        </Band>
      )}

      <Container className="flex flex-col gap-4 py-16">
        <h2 className="font-display text-2xl italic">Como escritora</h2>
        <p>
          Además de corregir, escribo. Soy autora de{" "}
          <em>Marcianos hijos de p...</em> (Grupo Editorial Ibáñez, 2025) y{" "}
          <em>Juro por mis orejas</em> (Editorial Oveja Negra, 2016).{" "}
          <Link href="/escritora" className="font-semibold text-teal underline">
            Conoce mis novelas →
          </Link>
        </p>
      </Container>

      <Band tone="cream" className="py-16">
        <Container className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-2xl italic">
            ¿Tienes un manuscrito listo para publicar?
          </h2>
          <WhatsAppButton message="Hola Amparo, quiero información sobre corrección de estilo.">
            Escríbeme por WhatsApp
          </WhatsAppButton>
        </Container>
      </Band>
    </>
  );
}
