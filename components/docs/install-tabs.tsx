"use client";

import { useState } from "react";

import { HugeiconsIcon } from "@hugeicons/react";
import { CopyIcon } from "@hugeicons/core-free-icons";

export function InstallTabs({
  installation,
}: {
  installation: Record<string, string>;
}) {
  const [active, setActive] = useState("npm");

  const command = installation[active];

  return (
    <div className="rounded-2xl border">
      <div className="flex gap-2 border-b p-2">
        {Object.keys(installation).map((manager) => (
          <button
            key={manager}
            onClick={() => setActive(manager)}
            className={`rounded-lg px-3 py-1 text-sm ${
              active === manager
                ? "bg-zinc-900 text-white dark:bg-white dark:text-black"
                : "text-muted-foreground"
            }`}
          >
            {manager}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between p-4">
        <code className="text-sm">{command}</code>

        <button
          onClick={() =>
            navigator.clipboard.writeText(command)
          }
        >
           <HugeiconsIcon icon={CopyIcon} />
        </button>
      </div>
    </div>
  );
}