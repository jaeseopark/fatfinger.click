import { SimpleGrid, Stack } from "@chakra-ui/react";

import Service from "./type/service";
import ServiceCard from "./ServiceCard";

import imfWebIcon from "./asset/imfweb.png";

export const SERVICES: Service[] = [
  {
    name: "imessageforwarder",
    releaseStatus: "production",
    logoSource: imfWebIcon,
    description:
      "Send and receive iMessage right in your browser.",
    externalLink: "https://github.com/jaeseopark/imessageforwarder-web",
  },
  {
    name: "m9cad",
    releaseStatus: "development",
    description:
      "Trace lines and curves on top of a video. Use it to create the outline of an object in your video and export it as SVG.",
    externalLink: "https://github.com/jaeseopark/m9cad",
  },
  {
    name: "od-imdb",
    releaseStatus: "development",
    description: "",
  },
  {
    name: "placeholder",
    releaseStatus: "development",
    description: "foobar",
  },
  {
    name: "placeholder2",
    releaseStatus: "development",
    description: "foobar",
  },
  {
    name: "placeholder3",
    releaseStatus: "development",
    description: "foobar",
  },
  {
    name: "placeholder4",
    releaseStatus: "development",
    description: "foobar",
  },
];

const Services = () => (
  <Stack align={"center"} justify={"center"} direction={"row"} marginY={30}>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} paddingX={10}>
      {SERVICES.map((s) => (
        <Stack key={s.name}>
          <ServiceCard {...s} />
        </Stack>
      ))}
    </SimpleGrid>
  </Stack>
);

export default Services;
