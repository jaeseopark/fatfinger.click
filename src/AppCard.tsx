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
import styled from "styled-components";
import App, { ReleaseStatus } from "./type/app";

const PrimaryButton = ({
  primaryLink,
  releaseStatus,
}: {
  primaryLink?: string;
  releaseStatus: ReleaseStatus;
}) => {
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
      disabled={releaseStatus === "Coming Soon"}
    >
      {releaseStatus}
    </Button>
  );
};
const ReadMoreButton = ({ readMoreLink }: { readMoreLink?: string }) => {
  if (!readMoreLink) return null;
  return (
    <Button
      flex={1}
      fontSize={"sm"}
      rounded={"full"}
      _focus={{
        bg: "gray.200",
      }}
      onClick={() => window.open(readMoreLink, "_self")}
    >
      Read more
    </Button>
  );
};

const Tags = ({ tags }: { tags?: string[] }) => {
  if (!tags) return null;
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
const Logo = ({ logoSource, isSquareLogo }) => {
  if (!logoSource) return null;
  const StyledAvatar = styled(Avatar)`
    background-color: transparent;
    position: relative;
    img {
      ${() => (isSquareLogo ? "border-radius: 0;" : "")}
    }
  `;
  return <StyledAvatar size="xl" mb={4} src={logoSource} alt="Logo" />;
};

// @ts-ignore
const Name = ({ children }) => (
  <Heading fontSize={"2xl"} fontFamily={"body"} mb={4}>
    {children}
  </Heading>
);

// @ts-ignore
const Description = ({ children }) => (
  <Text
    textAlign={"center"}
    color={useColorModeValue("gray.700", "gray.400")}
    px={3}
  >
    {children}
  </Text>
);

const AppCard = ({
  name,
  releaseStatus,
  logoSource,
  isSquareLogo,
  description,
  primaryLink,
  readMoreLink,
  tags,
}: App) => {
  return (
    <CenteredContainer>
      <Logo logoSource={logoSource} isSquareLogo={isSquareLogo} />
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Tags tags={tags} />
      <Stack mt={8} direction={"row"} spacing={4}>
        <PrimaryButton
          primaryLink={primaryLink}
          releaseStatus={releaseStatus}
        />
        <ReadMoreButton readMoreLink={readMoreLink} />
      </Stack>
    </CenteredContainer>
  );
};

export default AppCard;
