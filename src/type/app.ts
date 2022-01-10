export type ReleaseStatus = "production" | "installable" | "beta" | "development";

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
