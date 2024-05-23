import { Flex, Link, Text } from "@chakra-ui/react";
import { Logotype } from "./Logotype";

function Footer() {
  return (
    <Flex as="footer" bg="dark" mt="24px" h="300px">
      <Flex
        flexDir="column"
        flexGrow="1"
        justifyContent="center"
        alignItems="center"
        color="light"
        overflow="hidden"
      >
        <Link href="/">
            <Logotype color="light" height="75px" />
        </Link>
        <Flex gap="4" fontFamily="heading" fontSize="16px">
          <Text>Powdr-2023</Text>
          <Link href="/impressum">Impressum</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
