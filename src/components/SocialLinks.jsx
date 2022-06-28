import { Center, HStack, Image, Link } from "@chakra-ui/react";

export const SocialLinks = () => {
  const socialLinks = [
    {
      label: "Github",
      id: "github",
      href: "https://github.com/negarjf"
    },
    {
      label: "Twitter",
      id: "twitter",
      href: "https://twitter.com/NegarDev"
    },
    {
      label: "LinkedIn",
      id: "linkedin",
      href: "https://www.linkedin.com/in/negarjamalifard/"
    },
    {
      label: "Youtube",
      id: "youtube",
      href: "https://www.youtube.com/c/NegarDev"
    }
  ];

  return (
    <HStack>
      {/* <! -- Icons created by Freepik - Flaticon: https://www.flaticon.com/free-icons  --> */}
      {socialLinks.map((link) => (
        <Center
          as={Link}
          w="40px"
          h="40px"
          bg="gray.800"
          color="white"
          title={link.label}
          href={link.href}
          key={link.id}
          isExternal
        >
          <Image width="6" height="auto" src={`assets/icons/${link.id}.svg`} />
        </Center>
      ))}
    </HStack>
  );
};
