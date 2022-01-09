export type ExternalLinkType = "github" | "web";

export type ReleaseStatus = "production" | "development";

export type ExternalLink = {
  type: ExternalLinkType;
  href: string;
};

type Service = {
  name: string;
  releaseStatus: ReleaseStatus;
  logoSource?: string;
  description: string;
  externalLink?: string;
  tags?: string[];
};

export default Service;
