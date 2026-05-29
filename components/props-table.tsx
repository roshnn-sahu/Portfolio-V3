type Prop = {
  name: string;
  type: string;
  default?: string;
  description: string;
};

export function PropsTable({ props }: { props: Prop[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead className="border-b bg-muted/50">
          <tr>
            {["Prop", "Type", "Default", "Description"].map((h) => (
              <th
                key={h}
                className="px-4 py-2 text-left font-medium text-muted-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b last:border-0">
              <td className="px-4 py-2">
                <code className="rounded bg-muted px-1 py-0.5 text-xs">
                  {prop.name}
                </code>
              </td>
              <td className="px-4 py-2">
                <code className="rounded bg-blue-500/10 px-1 py-0.5 text-xs text-blue-400">
                  {prop.type}
                </code>
              </td>
              <td className="px-4 py-2 text-muted-foreground">
                {prop.default ?? "—"}
              </td>
              <td className="px-4 py-2 text-muted-foreground">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
