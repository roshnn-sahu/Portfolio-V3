interface Props {
  children: React.ReactNode;
}

export default function ComponentPreview({ children }: Props) {
  return (
    <div className="rounded-2xl border bg-background p-10">{children}</div>
  );
}
