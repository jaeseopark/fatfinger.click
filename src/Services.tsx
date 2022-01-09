import { Box, SimpleGrid, Stack } from "@chakra-ui/react";

import Service from "./type/service";
import ServiceCard from "./ServiceCard";

import imfWebIcon from "./asset/imfweb.png";

export const SERVICES: Service[] = [
  {
    name: "imessageforwarder",
    logoSource: imfWebIcon,
    description:
      "Send and receive iMessage right in your browser. The app is targeted towards hybrid computer users who use both Mac and Windows. You must own an iCloud-enabled device to use as the proxy.",
    externalLink: "https://github.com/jaeseopark/imessageforwarder-web",
  },
  {
    name: "m9cad",
    description:
      "An SVG editor to trace lines and curves on top of a video. Use it to create the outline of an object.",
    externalLink: "https://github.com/jaeseopark/m9cad",
  },
  {
    name: "od-imdb",
    description: "",
  },
  {
    name: "placeholder",
    description: "foobar",
  },
  {
    name: "placeholder2",
    description: "foobar",
  },
  {
    name: "placeholder3",
    description: "foobar",
  },
  {
    name: "placeholder4",
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
