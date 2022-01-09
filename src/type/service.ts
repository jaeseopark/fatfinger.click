export type ExternalLinkType = "github" | "web";

export type ExternalLink = {
  type: ExternalLinkType;
  href: string;
};

type Service = {
  name: string;
  logoSource?: string;
  description: string;
  externalLink?: string;
  tags?: string[];
};

export default Service;
