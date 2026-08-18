type PostFormValues = {
  title: string;
  excerpt: string;
  body: string;
  published: boolean;
};

export function PostForm({
  action,
  initialValues,
}: {
  action: (formData: FormData) => void;
  initialValues?: PostFormValues;
}) {
  return (
    <form action={action} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Título</span>
        <input
          type="text"
          name="title"
          required
          defaultValue={initialValues?.title}
          className="rounded-md border border-ink/20 px-4 py-2"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Resumen (para la lista del blog)</span>
        <textarea
          name="excerpt"
          required
          rows={2}
          defaultValue={initialValues?.excerpt}
          className="rounded-md border border-ink/20 px-4 py-2"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Cuerpo del artículo</span>
        <textarea
          name="body"
          required
          rows={16}
          defaultValue={initialValues?.body}
          className="rounded-md border border-ink/20 px-4 py-2 font-mono text-sm"
        />
        <span className="text-xs text-muted">
          Deja una línea en blanco entre párrafos.
        </span>
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="published"
          defaultChecked={initialValues?.published ?? true}
        />
        <span className="text-sm">Publicado (visible en el sitio)</span>
      </label>
      <button
        type="submit"
        className="w-fit rounded-md bg-coral px-5 py-3 font-semibold text-[var(--color-coral-ink)]"
      >
        Guardar
      </button>
    </form>
  );
}
