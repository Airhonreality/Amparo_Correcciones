import type { Metadata } from "next";
import Link from "next/link";
import { Container, Band } from "@/components/container";

export const metadata: Metadata = {
  title: "Como escritora",
  description:
    "Amparo Rozo, autora de Marcianos hijos de p... (Grupo Editorial Ibáñez) y Juro por mis orejas (Editorial Oveja Negra).",
};

export default function EscritoraPage() {
  return (
    <>
      <Band tone="rose" className="py-16">
        <Container>
          <h1 className="font-display text-4xl italic">Como escritora</h1>
        </Container>
      </Band>

      <Container className="flex flex-col gap-16 py-16">
        <article className="flex flex-col gap-4">
          <h2 className="font-display text-2xl">Marcianos hijos de p...</h2>
          <p className="font-display italic text-muted">
            &ldquo;La sátira mística que la crítica editorial no pudo
            ignorar&rdquo;.
          </p>
          <p>
            En un mercado editorial donde la coedición es la norma, el comité
            del Grupo Editorial Ibáñez destacó la fuerza narrativa y la
            originalidad temática de esta obra, apostando por su publicación
            bajo el sello Sképsi (2025).
          </p>
          <div>
            <p className="font-semibold">Sinopsis</p>
            <p className="mt-2 leading-relaxed">
              Esta es la historia de una familia tradicional de clase
              trabajadora, conformada por Ramiro, padre de familia; su esposa,
              una abnegada ama de casa, y sus tres hijos, cuya cotidianidad se
              ve alterada por el inesperado regreso del tío Marco, quien
              ingresó a una logia hermética, y ahora hace milagros: multiplica
              el pan, los envueltos, el chocolate y hasta los huevos; desata
              tormentas a su antojo, y cura heridas y quemaduras. Deslumbrados
              con sus poderes, Ramiro y Sebastián, el hijo menor, seguirán sus
              pasos; en tanto que el hijo mayor, escéptico por naturaleza, se
              mantendrá en franca rebeldía. La tensión escala cuando el
              maestro de la logia anuncia una fecha definitiva para el fin del
              mundo: el 21 de diciembre de 2012. Según el jerarca, el planeta
              será purificado y solo los &ldquo;elegidos&rdquo; sobrevivirán.
            </p>
            <p className="mt-3 leading-relaxed">
              La historia se desarrolla en Bogotá y muestra la influencia del
              sincretismo cultural con los nuevos movimientos religiosos que
              surgieron desde los años sesenta hasta la actualidad. Una novela
              muy humana, con ligeros toques de realismo mágico y humor ácido.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex w-fit items-center rounded-md bg-magenta px-5 py-3 font-semibold uppercase tracking-wide text-white hover:brightness-95"
          >
            Comprar ejemplar (En Editorial Ibáñez)
          </a>
        </article>

        <article className="flex flex-col gap-4 border-t border-ink/10 pt-16">
          <h2 className="font-display text-2xl">Juro por mis orejas (Leonidas)</h2>
          <p>
            Una novela de ficción histórica, donde los espantos, los duendes y
            hasta el mismo diablo cobran vida en los campos colombianos, en
            medio de guerras y amores prohibidos.
          </p>
          <div>
            <p className="font-semibold">Sinopsis</p>
            <p className="mt-2 leading-relaxed">
              En un remoto pueblo de frío y nublado enigma, una jovencita de
              buena familia da a luz a un niño de largas orejas y pies
              deformes, pero de radiantes ojos azules. Atormentado por sus
              defectos, llevará a diario un sombrero de ala ancha y alpargatas
              que lo guardarán de las burlas de los pueblerinos y el desprecio
              de las jovencitas.
            </p>
            <p className="mt-3 leading-relaxed">
              Su destino estará marcado por las reyertas políticas entre
              liberales y conservadores y por la sombra de su abuelo, que le
              enseñará desde pequeño a defenderse de sus enemigos. Con el
              transcurrir de los años pasará de los puños y la cauchera a
              crear un poderoso ejército civil con el que resistirá las
              embestidas a su pueblo natal.
            </p>
            <p className="mt-3 leading-relaxed">
              La historia nos transporta a una tierra mágica, hogar de
              duendes, lloronas, almas en pena y deidades ancestrales, que
              conviven con el mismo diablo, quien no dudará en tomar partido
              en las disputas políticas.
            </p>
          </div>
          <p className="text-sm text-muted">
            Primera edición: <em>Juro por mis orejas</em>, Editorial Oveja
            Negra (2016). Segunda edición disponible en Amazon.
          </p>
          <a
            href="#"
            className="inline-flex w-fit items-center rounded-md bg-magenta px-5 py-3 font-semibold uppercase tracking-wide text-white hover:brightness-95"
          >
            Comprar ejemplar (Amazon)
          </a>
        </article>

        <div className="border-t border-ink/10 pt-8">
          <h2 className="font-display text-xl italic">Reconocimientos</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
            <li>
              La revista cultural DC, en su sección de libros recomendados,
              destacó el carácter histórico y mágico de la obra.
            </li>
            <li>
              El escritor y columnista colombiano Juan Esteban Constaín
              reseñó <em>Juro por mis orejas</em> en el espacio GPS del canal
              UNO, resaltando su carácter histórico y fantástico.
            </li>
          </ul>
        </div>

        <p>
          ¿Quieres conocer mi trayectoria como correctora?{" "}
          <Link href="/perfil" className="font-semibold text-teal underline">
            Ver mi perfil →
          </Link>
        </p>
      </Container>
    </>
  );
}
