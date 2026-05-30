import { codeToHtml } from "shiki";

interface CodeBlockServerProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export async function CodeBlockServer({
  code,
  language = "tsx",
  showLineNumbers = false,
}: CodeBlockServerProps) {
  const html = await codeToHtml(code, {
    lang: language,
    theme: "github-dark",
    transformers: [
      {
        pre(node) {
          if (typeof node.properties?.style === "string") {
            node.properties.style = node.properties.style
              .replace(/background-color:[^;]+;?/g, "background-color: transparent")
              .trim();
          } else {
            node.properties!.style = "background-color: transparent";
          }
        },
      },
      ...(showLineNumbers
        ? [
            {
              code(node: any) {
                node.properties["data-line-numbers"] = "";
                node.properties["style"] = "display: grid";
              },
              line(node: any) {
                node.properties["data-line"] = "";
              },
            },
          ]
        : []),
    ],
  });

  return (
    <div
      className="overflow-x-auto rounded-lg p-4 font-mono text-sm [&>pre]:m-0 [&>pre]:bg-transparent [&>pre]:p-0 [&>pre]:outline-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
