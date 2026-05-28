import { promises as fs } from "fs";
import path from "path";

interface RegistryFile {
  path: string;
  type: string;
  content?: string;
}

interface RegistryItem {
  name: string;
  type: string;
  title: string;
  description: string;
  files: RegistryFile[];
  [key: string]: unknown;
}

interface Registry {
  $schema: string;
  name: string;
  homepage: string;
  items: RegistryItem[];
}

async function readRegistry(): Promise<Registry> {
  const registryPath = path.join(process.cwd(), "registry.json");
  const content = await fs.readFile(registryPath, "utf-8");
  return JSON.parse(content);
}

async function readFileContent(filePath: string): Promise<string> {
  const fullPath = path.join(process.cwd(), filePath);
  return await fs.readFile(fullPath, "utf-8");
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ segments: string[] }> }
) {
  const { segments } = await params;

  try {
    const registry = await readRegistry();

    // /r/registry.json → serve catalog (strip file contents)
    if (segments.length === 1 && segments[0] === "registry.json") {
      const catalog = {
        ...registry,
        items: registry.items.map(({ files, ...rest }) => ({
          ...rest,
          files: files?.map((f) => ({ path: f.path, type: f.type })),
        })),
      };

      return Response.json(catalog);
    }

    // /r/[name].json → serve individual item with file contents
    if (segments.length === 1 && segments[0].endsWith(".json")) {
      const name = segments[0].replace(/\.json$/, "");
      const item = registry.items.find((i) => i.name === name);

      if (!item) {
        return Response.json(
          { error: `Registry item "${name}" was not found.` },
          { status: 404 }
        );
      }

      // Read file contents for each file
      const filesWithContent: RegistryFile[] = await Promise.all(
        (item.files || []).map(async (file) => {
          const content = await readFileContent(file.path);
          return { ...file, content };
        })
      );

      return Response.json({
        $schema: "https://ui.shadcn.com/schema/registry-item.json",
        ...item,
        files: filesWithContent,
      });
    }

    // Otherwise, 404
    return Response.json({ error: "Not found." }, { status: 404 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Registry error:", message);
    return Response.json(
      { error: "Failed to serve registry." },
      { status: 500 }
    );
  }
}
