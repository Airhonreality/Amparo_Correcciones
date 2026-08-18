import "server-only";
import { eq, desc } from "drizzle-orm";
import { blogPosts, portfolioItems, testimonials } from "./schema";

/**
 * Las consultas públicas atrapan errores de conexión (p. ej. DATABASE_URL sin
 * configurar todavía) y devuelven un valor vacío en vez de tumbar la página.
 */
async function safe<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    console.error("[db] consulta falló, usando valor de reserva:", error);
    return fallback;
  }
}

export async function getPublishedBlogPosts() {
  return safe(async () => {
    const { db } = await import("./index");
    return db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.published, true))
      .orderBy(desc(blogPosts.createdAt));
  }, []);
}

export async function getBlogPostBySlug(slug: string) {
  return safe(async () => {
    const { db } = await import("./index");
    const rows = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.slug, slug))
      .limit(1);
    return rows[0] ?? null;
  }, null);
}

export async function getAuthorizedPortfolioItems() {
  return safe(async () => {
    const { db } = await import("./index");
    return db
      .select()
      .from(portfolioItems)
      .where(eq(portfolioItems.authorized, true))
      .orderBy(desc(portfolioItems.createdAt));
  }, []);
}

export async function getFeaturedTestimonial() {
  return safe(async () => {
    const { db } = await import("./index");
    const rows = await db
      .select()
      .from(testimonials)
      .where(eq(testimonials.featuredOnHome, true))
      .limit(1);
    return rows[0] ?? null;
  }, null);
}

// --- Consultas de administración (sin fallback: si fallan, el admin debe verlo) ---

export async function getAllBlogPostsAdmin() {
  const { db } = await import("./index");
  return db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
}

export async function getAllPortfolioItemsAdmin() {
  const { db } = await import("./index");
  return db.select().from(portfolioItems).orderBy(desc(portfolioItems.createdAt));
}
