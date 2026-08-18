export const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "573133631715";

export function whatsappHref(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/correccion-de-estilo", label: "Corrección de estilo" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/perfil", label: "Perfil" },
  { href: "/escritora", label: "Escritora" },
  { href: "/blog", label: "Blog" },
] as const;

export const siteInfo = {
  name: "Amparo Rozo",
  tagline: "Corrección, redacción y estilo",
  email: "amparorozo21@hotmail.com",
  phone: "313 3631715",
  address: "Cra 72 No 22 D 54 Int. 33 Apto 1001, Ciudad Salitre - Bogotá (Colombia)",
} as const;
