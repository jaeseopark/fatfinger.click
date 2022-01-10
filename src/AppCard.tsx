import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";
import App, { ReleaseStatus } from "./type/app";

const PrimaryButton = ({
  primaryLink,
  releaseStatus,
}: {
  primaryLink?: string;
  releaseStatus: ReleaseStatus;
}) => {
  const getButtonLabel = () => {
    switch (releaseStatus) {
      case "production":
        return "Launch";
      case "beta":
        return "Request access";
      default:
        return "Coming soon";
    }
  };

  return (
    <Button
      flex={1}
      fontSize={"sm"}
      rounded={"full"}
      bg={"blue.400"}
      color={"white"}
      boxShadow={
        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
      }
      _hover={{
        bg: "blue.500",
      }}
      _focus={{
        bg: "blue.500",
      }}
      onClick={() => window.open(primaryLink, "_self")}
      disabled={releaseStatus === "development"}
    >
      {getButtonLabel()}
    </Button>
  );
};
const ReadMoreButton = ({ externalLink }: { externalLink?: string }) => {
  if (!externalLink) return null;
  return (
    <Button
      flex={1}
      fontSize={"sm"}
      rounded={"full"}
      _focus={{
        bg: "gray.200",
      }}
      onClick={() => window.open(externalLink, "_self")}
    >
      Read more
    </Button>
  );
};

const Tags = ({
  releaseStatus,
  additionalTags,
}: {
  releaseStatus: ReleaseStatus;
  additionalTags?: string[];
}) => {
  const tags = releaseStatus === "beta" ? ["private access"] : [];
  if (additionalTags) {
    tags.push(...additionalTags);
  }
  return (
    <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
      {tags.map((tag) => (
        <Badge
          px={2}
          py={1}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          bg={useColorModeValue("gray.50", "gray.800")}
          fontWeight={"400"}
          key={tag}
        >
          {tag}
        </Badge>
      ))}
    </Stack>
  );
};

// @ts-ignore
const CenteredContainer = ({ children }) => (
  <Center py={6}>
    <Box
      maxW={"420px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
    >
      {children}
    </Box>
  </Center>
);

// @ts-ignore
const Logo = ({ logoSource }) => (
  <Avatar
    size={"xl"}
    src={logoSource}
    alt={"Avatar Alt"}
    mb={4}
    pos={"relative"}
  />
);

// @ts-ignore
const Name = ({ name }) => (
  <Heading fontSize={"2xl"} fontFamily={"body"}>
    {name}
  </Heading>
);

// @ts-ignore
const Description = ({ description }) => (
  <Text
    textAlign={"center"}
    color={useColorModeValue("gray.700", "gray.400")}
    px={3}
  >
    {description}
  </Text>
);

const AppCard = ({
  name,
  releaseStatus,
  logoSource,
  description,
  primaryLink,
  externalLink,
  additionalTags,
}: App) => {
  return (
    <CenteredContainer>
      <Logo logoSource={logoSource} />
      <Name name={name} />
      <Description description={description} />
      <Tags releaseStatus={releaseStatus} additionalTags={additionalTags} />
      <Stack mt={8} direction={"row"} spacing={4}>
        <PrimaryButton
          primaryLink={primaryLink}
          releaseStatus={releaseStatus}
        />
        <ReadMoreButton externalLink={externalLink} />
      </Stack>
    </CenteredContainer>
  );
};

export default AppCard;
