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
import Service from "./type/service";

const ServiceCard = ({
  name,
  releaseStatus,
  logoSource,
  description,
  externalLink,
  tags,
}: Service) => {
  return (
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
        <Avatar
          size={"xl"}
          src={logoSource}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {name}
        </Heading>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {description}
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          {tags &&
            tags.map((tag) => (
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

        <Stack mt={8} direction={"row"} spacing={4}>
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
            onClick={() => window.open("/" + name, "_self")}
            disabled={releaseStatus === "development"}
          >
            {releaseStatus === "development" ? "Coming soon" : "Launch"}
          </Button>
          {externalLink && (
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
          )}
        </Stack>
      </Box>
    </Center>
  );
};

export default ServiceCard;
