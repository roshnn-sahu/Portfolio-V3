import { codeToHtml } from "shiki";

interface CodeBlockServerProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export async function CodeBlockServer({
  code,
  language = "tsx",
  showLineNumbers = true,
}: CodeBlockServerProps) {
  const html = await codeToHtml(code, {
    lang: language,
    theme: "github-dark",
    transformers: [
      {
        pre(node) {
          if (typeof node.properties?.style === "string") {
            node.properties.style = node.properties.style
              .replace(
                /background-color:[^;]+;?/g,
                "background-color: transparent; scrollbar-width:none ;"
              )
              .trim();
          } else {
            node.properties!.style =
              "background-color: transparent; ";
          }
        },
      },
      ...(showLineNumbers
        ? [
            {
              code(node: any) {
                node.properties["data-line-numbers"] = "";
                node.properties["style"] =
                  "display: grid; font-family: var(--font-geist-mono);";
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
      className="font-giest-sans no-scrollbar overflow-x-auto bg-muted/50 p-4 text-sm [&>pre]:m-0 [&>pre]:bg-transparent [&>pre]:p-0 [&>pre]:outline-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
