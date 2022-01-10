export type ReleaseStatus = "production" | "beta" | "development";

type Service = {
  name: string;
  releaseStatus: ReleaseStatus;
  logoSource?: string;
  description: string;
  primaryLink?: string;
  externalLink?: string;
  additionalTags?: string[];
};

export default Service;
