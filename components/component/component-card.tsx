import Link from "next/link";

interface Props {
  title: string;
  slug: string;
  description: string;
  idx: number;
}

export function ComponentCard({ title, slug, description, idx }: Props) {
  return (
    <Link href={`/components/${slug}`}>
      <div className="px-4 py-3 transition-all duration-300 group-hover/cards:opacity-50 hover:opacity-100!">
        <h3 className="text-md font-geist-sans font-semibold">
          {idx + 1}. {title}
        </h3>
      </div>
    </Link>
  );
}
