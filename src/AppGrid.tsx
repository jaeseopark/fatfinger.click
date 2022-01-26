import { SimpleGrid, Stack } from "@chakra-ui/react";

import App from "./type/app";
import AppCard from "./AppCard";

import imessageeeIcon from "./asset/imfweb.png";
import stockalertIcon from "./asset/stockalert.png";
import m9cadIcon from "./asset/m9cad.png";
import odBoostIcon from "./asset/odboost.png";

export const APPS: App[] = [
  {
    name: "iMessageee",
    releaseStatus: "production",
    logoSource: imessageeeIcon,
    description:
      "Send and receive iMessage right in your browser. Made for hybrid users who own both Mac and Windows.",
    primaryLink: "https://imessageee.fatfinger.click/",
  },
  {
    name: "OD Boost",
    releaseStatus: "development",
    description:
      "Give open directories a modern look with a click of a button. Navigate with breadcrumbs, bulk-lookup movie ratings, and more.",
    primaryLink: "https://chrome.google.com/webstore/category/extensions",
    tags: ["chrome extension"],
    logoSource: odBoostIcon,
  },
  {
    name: "stockalert",
    releaseStatus: "beta",
    description:
      "Get notified when hot commodity items become available for purchase. Supported websites: Bestbuy Canada, Memory Express, and CalDigit.",
    primaryLink: "https://github.com/jaeseopark/stockalert/issues/new",
    logoSource: stockalertIcon,
    tags: ["discord", "SMS"],
  },
  {
    name: "m9cad",
    releaseStatus: "development",
    description:
      "Trace lines and curves over a live video and export them as SVG files.",
    readMoreLink: "https://github.com/jaeseopark/m9cad",
    logoSource: m9cadIcon,
  },
];

const AppGrid = () => (
  <Stack
    align={"center"}
    justify={"center"}
    direction={"row"}
    px={10}
    pt="30px"
    pb="100px"
  >
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      {APPS.map((s) => (
        <Stack key={s.name}>
          <AppCard {...s} />
        </Stack>
      ))}
    </SimpleGrid>
  </Stack>
);

export default AppGrid;
