import type { Metadata } from "next";
import Image from "next/image";
import { Container, Band } from "@/components/container";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { getAuthorizedPortfolioItems } from "@/lib/db/queries";

export const metadata: Metadata = {
  title: "Libros corregidos",
  description: "Una muestra de manuscritos corregidos por Amparo Rozo.",
};

export const dynamic = "force-dynamic";

export default async function PortafolioPage() {
  const items = await getAuthorizedPortfolioItems();

  return (
    <>
      <Band tone="cream" className="py-16">
        <Container className="flex flex-col gap-3 text-center">
          <h1 className="font-display text-4xl italic">Libros corregidos</h1>
          <p className="text-lg text-muted">
            Una muestra de manuscritos que he corregido — de distintos
            géneros, todos con el mismo cuidado palabra por palabra.
          </p>
        </Container>
      </Band>

      <Container className="py-16">
        {items.length === 0 ? (
          <p className="rounded-lg bg-bg-alt p-6 text-center text-muted">
            Portafolio en construcción — muy pronto vas a ver aquí los libros
            corregidos.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2">
            {items.map((item) => (
              <article
                key={item.id}
                className="flex gap-4 rounded-lg bg-bg-alt p-5"
              >
                {item.coverImageUrl && (
                  <Image
                    src={item.coverImageUrl}
                    alt={`Portada de ${item.bookTitle}`}
                    width={96}
                    height={144}
                    className="h-36 w-24 shrink-0 rounded object-cover"
                  />
                )}
                <div>
                  <h2 className="font-display text-lg italic">{item.bookTitle}</h2>
                  <p className="text-sm font-semibold text-muted">
                    {item.authorName} — {item.genre}
                  </p>
                  <p className="mt-2 text-sm">{item.correctionSummary}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>

      <Band tone="cream" className="py-16">
        <Container className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-xl italic">
            ¿Quieres que tu libro sea el próximo?
          </h2>
          <WhatsAppButton message="Hola Amparo, quiero información sobre corrección de estilo.">
            Escríbeme por WhatsApp
          </WhatsAppButton>
        </Container>
      </Band>
    </>
  );
}
