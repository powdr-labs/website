import { Flex, Image } from "@chakra-ui/react";
import { Logotype } from "./Logotype";

function Header() {
  return (
    <Flex as="section" w="100%" justifyContent="center" mt={"40px"}>
      <Logotype color="dark" height={"100px"} />
    </Flex>
  );
}

export default Header;
