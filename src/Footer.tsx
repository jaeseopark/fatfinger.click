import {
  Box,
  chakra,
  Container,
  Spacer,
  Stack,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { ReactNode } from "react";
import { ChatIcon } from "@chakra-ui/icons";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      bottom={0}
      position="absolute"
      width="100%"
    >
      <Container
        as={Stack}
        maxW={"8xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Spacer />
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Github"} href="https://github.com/jaeseopark">
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={"Github"}
            href="https://github.com/jaeseopark/fatfinger.click/issues/new"
          >
            <ChatIcon />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
