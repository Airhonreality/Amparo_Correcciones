"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";

const ACCENTS: Record<string, string> = {
  á: "a",
  é: "e",
  í: "i",
  ó: "o",
  ú: "u",
  ñ: "n",
  ü: "u",
};

function slugify(title: string) {
  const withoutAccents = title
    .toLowerCase()
    .split("")
    .map((char) => ACCENTS[char] ?? char)
    .join("");

  return withoutAccents
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function createPostAction(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();
  const published = formData.get("published") === "on";

  if (!title || !excerpt || !body) {
    throw new Error("Título, resumen y cuerpo son obligatorios.");
  }

  await db.insert(blogPosts).values({
    slug: `${slugify(title)}-${Date.now().toString(36)}`,
    title,
    excerpt,
    body,
    published,
  });

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}

export async function updatePostAction(id: number, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();
  const published = formData.get("published") === "on";

  if (!title || !excerpt || !body) {
    throw new Error("Título, resumen y cuerpo son obligatorios.");
  }

  await db
    .update(blogPosts)
    .set({ title, excerpt, body, published, updatedAt: new Date() })
    .where(eq(blogPosts.id, id));

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}

export async function deletePostAction(id: number) {
  await db.delete(blogPosts).where(eq(blogPosts.id, id));
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
}
