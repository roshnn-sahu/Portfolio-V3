"use client";

import { CopyIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";

interface InstallCommandProps {
  command: string;
}

export function InstallCommand({ command }: InstallCommandProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
  };

  return (
    <div className="flex items-center justify-between rounded-2xl border bg-black px-4 py-3 text-white">
      <code className="text-sm md:text-base">{command}</code>

      <button
        onClick={handleCopy}
        className="rounded-md p-2 transition hover:bg-white/10"
      >
        <HugeiconsIcon icon={CopyIcon} />
      </button>
    </div>
  );
}
