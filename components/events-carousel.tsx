interface CarouselImage {
  src: string;
  alt: string;
}

const images: CarouselImage[] = [
  {
    src: '/event-1.jpg',
    alt: 'Lanzamiento Marcianos - Casa Editorial Ibáñez',
  },
  {
    src: '/event-2.jpg',
    alt: 'Amparo Rozo en Filbo Marcianos',
  },
  {
    src: '/event-3.jpg',
    alt: 'Evento de lanzamiento',
  },
  {
    src: '/event-4.avif',
    alt: 'Amparo Rozo firmando en feria del libro',
  },
];

const SLIDE_DURATION = 6;

export function EventsCarousel() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 pointer-events-none hero-fade"
          style={{ animationDelay: `${-index * SLIDE_DURATION}s` }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover hero-kenburns"
            style={{ animationDelay: `${-index * SLIDE_DURATION}s` }}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}