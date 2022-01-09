import { ReactNode } from "react";
import {
  Box,
  Link,
  useColorModeValue,
  Stack,
  Container,
  Text,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const NavLink = ({
  children,
  href,
  ...props
}: { children: ReactNode } & { href?: string }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={href || "#"}
    {...props}
  >
    {children}
  </Link>
);

const Nav = () => (
  <Box
    bg={useColorModeValue("gray.50", "gray.900")}
    color={useColorModeValue("gray.700", "gray.200")}
  >
    <Container
      as={Stack}
      maxW="8xl"
      py={4}
      direction={{ base: "column", md: "row" }}
      spacing={4}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "center" }}
    >
      <NavLink href="/">
        <Text>fatfinger.click</Text>
      </NavLink>

      <Stack direction={"row"} spacing={6}>
        <ColorModeSwitcher />
      </Stack>
    </Container>
  </Box>
);

export default Nav;
