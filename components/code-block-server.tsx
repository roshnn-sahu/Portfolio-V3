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
    transformers: showLineNumbers
      ? [
          {
            pre(node) {
              node.properties["style"] = "background-color:'transparent'";
            },
            code(node) {
              node.properties["data-line-numbers"] = "";
              node.properties["style"] = "display: grid";
            },
            line(node) {
              node.properties["data-line"] = "";
            },
          },
        ]
      : undefined,
  });

  return (
    <div
      className="overflow-x-auto rounded-lg p-4 font-mono text-sm [&>pre]:m-0 [&>pre]:bg-transparent [&>pre]:p-0 [&>pre]:outline-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
