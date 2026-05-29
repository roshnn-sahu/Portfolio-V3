interface Prop {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export function PropsTable({ props }: { props: Prop[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            {["Prop", "Type", "Default", "Description"].map((h) => (
              <th
                key={h}
                className="px-4 py-2.5 text-left font-medium text-muted-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y">
          {props.map((prop) => (
            <tr key={prop.name}>
              <td className="px-4 py-2.5">
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs font-medium">
                  {prop.name}
                </code>
              </td>
              <td className="px-4 py-2.5">
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
                  {prop.type}
                </code>
              </td>
              <td className="px-4 py-2.5 text-muted-foreground">
                {prop.default ?? "—"}
              </td>
              <td className="px-4 py-2.5 text-muted-foreground">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
