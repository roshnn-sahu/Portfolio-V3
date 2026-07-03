if(!process.env.NEXT_PUBLIC_APP_URL) {
    console.warn("NEXT_PUBLIC_APP_URL is not set. Defaulting to http://localhost:3000");
}
if(!process.env.GITHUB_CONTRIBUTIONS_API_URL) {
    console.warn("GITHUB_CONTRIBUTIONS_API_URL is not set. Defaulting to https://github-contributions-api.jogruber.de");
}
if(!process.env.NODE_ENV) {
    console.warn("NODE_ENV is not set. Defaulting to development");
}

export const config = {
    baseUrl : process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    githubContributionApiUrl: process.env.GITHUB_CONTRIBUTIONS_API_URL || "https://github-contributions-api.jogruber.de",
    nodeEnv: process.env.NODE_ENV || "development"
}