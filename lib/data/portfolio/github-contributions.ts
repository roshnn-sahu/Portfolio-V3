import { unstable_cache } from "next/cache";

import type { Activity } from "@/components/kibo-ui/contribution-graph";
// import { GITHUB_USERNAME } from "@/config/site";

export const GITHUB_USERNAME = "roshnn-sahu";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

export const getGitHubContributions = unstable_cache(
  async () => {
    const apiUrl =
      process.env.GITHUB_CONTRIBUTIONS_API_URL ||
      "https://github-contributions-api.jogruber.de";

    console.info(`Fetching GitHub contributions for ${GITHUB_USERNAME}...`);

    try {
      const res = await fetch(`${apiUrl}/v4/${GITHUB_USERNAME}?y=last`);
      if (!res.ok) {
        console.error(
          `GitHub contributions API returned ${res.status} for ${GITHUB_USERNAME}`
        );
        return [];
      }
      const data = (await res.json()) as GitHubContributionsResponse;
      console.info(
        `Successfully fetched ${data.contributions.length} contributions.`
      );
      return data.contributions;
    } catch (error) {
      console.error("Failed to fetch GitHub contributions:", error);
      return [];
    }
  },
  ["github-contributions"],
  { revalidate: 86400 } // Cache for 1 day (86400 seconds)
);

