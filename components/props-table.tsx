interface PropItem {
  name: string;
  type: string;
  default?: string;
  description: string;
}

interface PropsTableProps {
  props: PropItem[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border/60 bg-background shadow-xs">
      <div className="overflow-x-auto">
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
                <td className="p-4">
                  <span className="inline-flex items-center rounded-md border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 font-mono text-[0.75rem] font-medium leading-tight text-blue-600 dark:text-blue-400">
                    {prop.type}
                  </span>
                </td>
                <td className="p-4">
                  {prop.default ? (
                    <code className="rounded bg-muted/40 px-1.5 py-0.5 font-mono text-[0.8125rem] text-muted-foreground">
                      {prop.default}
                    </code>
                  ) : (
                    <span className="text-muted-foreground/50">&mdash;</span>
                  )}
                </td>
                <td className="p-4 text-muted-foreground">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
