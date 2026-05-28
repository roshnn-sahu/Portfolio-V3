interface PropItem {
  name: string;
  type: string;
  default: string;
  description: string;
}

const TYPE_COLORS: Record<string, string> = {
  string: "bg-blue-500/10 text-blue-500 dark:text-blue-400 border-blue-500/20",
  number:
    "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  boolean:
    "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  "string[]":
    "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  ReactNode:
    "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
  function:
    "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
};

function getTypeBadge(type: string) {
  const base = type.replace(/^["']|["']$/g, "");
  const colorClass =
    TYPE_COLORS[base] ||
    "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20";

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[0.75rem] font-medium leading-tight ${colorClass}`}
    >
      {base}
    </span>
  );
}

export function PropsTable({ props }: { props: PropItem[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-background shadow-xs">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/50 bg-muted/30">
            <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Prop
            </th>
            <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Type
            </th>
            <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Default
            </th>
            <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/40">
          {props.map((prop) => (
            <tr
              key={prop.name}
              className="transition-colors hover:bg-muted/20"
            >
              <td className="p-4">
                <code className="rounded bg-muted/40 px-1.5 py-0.5 font-mono text-[0.8125rem] font-medium text-foreground">
                  {prop.name}
                </code>
              </td>
              <td className="p-4">{getTypeBadge(prop.type)}</td>
              <td className="p-4">
                {prop.default !== "-" ? (
                  <code className="rounded bg-muted/40 px-1.5 py-0.5 font-mono text-[0.8125rem] text-muted-foreground">
                    {prop.default}
                  </code>
                ) : (
                  <span className="text-muted-foreground/50">—</span>
                )}
              </td>
              <td className="p-4 text-muted-foreground">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}