import Link from "next/link";

interface Props {
  title: string;
  slug: string;
  description: string;
}

export function ComponentCard({ title, slug, description }: Props) {
  return (
    <Link href={`/components/${slug}`}>
      <div className="rounded-md border px-4 py-3 transition-all duration-300 group-hover/cards:opacity-50 hover:-translate-y-1 hover:opacity-100! hover:shadow-xl">
        <h3 className="text-md font-geist-sans font-semibold">{title}</h3>

        <p className="font-geist-sans text-xs text-muted-foreground">
          {description}
        </p>
      </div>
    </Link>
  );
}
