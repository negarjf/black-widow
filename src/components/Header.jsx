import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  HStack,
  Heading
} from "@chakra-ui/react";

export const Header = () => {
  const nav = [
    // {
    //   label: "Home",
    //   link: "/"
    // },
    {
      label: "Blog",
      link: "https://blog.negar.dev"
    }
    // {
    //   label: "Talks",
    //   link: "#talks"
    // }
  ];

  return (
    <Flex as="header" justifyContent="space-between" alignItems="center">
      <Heading as="h1" fontWeight="bold" fontSize="xl">
        Negar Jamalifard
      </Heading>
      <HStack as="nav">
        {nav.map((navItem) => (
          <Button as="a" href={navItem.link} variant="ghost" cursor="pointer">
            {navItem.label}
          </Button>
        ))}
      </HStack>
    </Flex>
  );
};
