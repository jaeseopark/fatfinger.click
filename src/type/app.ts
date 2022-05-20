export type ReleaseStatus = "Launch" | "Install" | "Request Access" | "Coming Soon";

type App = {
  name: string;
  releaseStatus: ReleaseStatus;
  logoSource?: string;
  isSquareLogo?: boolean;
  description: string;
  primaryLink?: string;
  readMoreLink?: string;
  tags?: string[];
};

export default App;
