import { Flex, Link, Text } from "@chakra-ui/react";
import { Logotype } from "./Logotype";

let currentYear = new Date().getFullYear();

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
        <Text fontFamily="heading" fontSize="16px">© powdr labs GmbH 2023-{currentYear}. All Rights Reserved.</Text>
        <Flex gap="4" fontFamily="heading" fontSize="16px">
          <Link href="/impressum">Impressum</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
