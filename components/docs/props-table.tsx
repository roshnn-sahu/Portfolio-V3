interface PropItem {
  name: string;
  type: string;
  default: string;
  description: string;
}

export function PropsTable({
  props,
}: {
  props: PropItem[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border">
      <table className="w-full text-sm">
        <thead className="border-b bg-muted/50">
          <tr>
            <th className="p-3 text-left">Prop</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Default</th>
            <th className="p-3 text-left">Description</th>
          </tr>
        </thead>

        <tbody>
          {props.map((prop) => (
            <tr
              key={prop.name}
              className="border-b"
            >
              <td className="p-3">{prop.name}</td>
              <td className="p-3">{prop.type}</td>
              <td className="p-3">{prop.default}</td>
              <td className="p-3">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}