export type ReleaseStatus = "production" | "installable" | "beta" | "development";

type App = {
  name: string;
  releaseStatus: ReleaseStatus;
  logoSource?: string;
  description: string;
  primaryLink?: string;
  readMoreLink?: string;
  tags?: string[];
};

export default App;
