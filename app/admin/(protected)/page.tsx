import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-display text-3xl italic">Panel de administración</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/admin/blog"
          className="rounded-lg bg-cream p-6 hover:bg-cream-soft"
        >
          <p className="font-display text-xl">Blog</p>
          <p className="text-sm text-muted">Crear y editar artículos del blog.</p>
        </Link>
        <Link
          href="/admin/portafolio"
          className="rounded-lg bg-cream p-6 hover:bg-cream-soft"
        >
          <p className="font-display text-xl">Portafolio</p>
          <p className="text-sm text-muted">
            Agregar libros corregidos con portada y descripción.
          </p>
        </Link>
      </div>
    </div>
  );
}
