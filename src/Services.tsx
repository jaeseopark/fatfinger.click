import { SimpleGrid, Stack } from "@chakra-ui/react";

import Service from "./type/service";
import ServiceCard from "./ServiceCard";

import imfWebIcon from "./asset/imfweb.png";
import stockalertIcon from "./asset/stockalert.png";
import m9cadIcon from "./asset/m9cad.png";

export const SERVICES: Service[] = [
  {
    name: "iMessage Forwarder",
    releaseStatus: "production",
    logoSource: imfWebIcon,
    description:
      "Send and receive iMessage right in your browser. Made for hybrid users who own both Mac and Windows.",
    primaryLink: "/imessageforwarder",
    externalLink: "https://github.com/jaeseopark/imessageforwarder-web",
  },
  {
    name: "stockalert",
    releaseStatus: "beta",
    description:
      "Get notified when hot commodity items become available for purchase. Supported websites: Bestbuy Canada, Memory Express, and CalDigit.",
    primaryLink:
      "https://github.com/jaeseopark/stockalert/issues/new?title=Access%20Request",
    logoSource: stockalertIcon,
  },
  {
    name: "m9cad",
    releaseStatus: "development",
    description:
      "Trace lines and curves over a live video and export them as SVG files.",
    externalLink: "https://github.com/jaeseopark/m9cad",
    logoSource: m9cadIcon,
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
