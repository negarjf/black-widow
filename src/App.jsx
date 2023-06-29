import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  VStack
} from "@chakra-ui/react";
import { Header } from "./components/Header";
import { SocialLinks } from "./components/SocialLinks";
import "./styles.css";

export default function App() {
  return (
    <Container maxW="1800">
      <Grid
        width="100%"
        height={["100%", "100vh"]}
        templateRows="100px auto"
        pb="5"
      >
        <Header />
        <Grid
          as="main"
          height="100%"
          templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
          templateRows="repeat(4, 1fr)"
          gap={["5", "5", "5", "10"]}
        >
          <GridItem
            rowSpan={[2, 2, 3]}
            colSpan={[2, 2, 1]}
            order={[2, 2, 1]}
            as={Flex}
            justifyContent="center"
            flexDirection="column"
            p="5"
          >
            <VStack maxW="600" alignItems="start">
              <Heading size="2xl" mb="2">
                hi there,
              </Heading>
              <Text size="lg">
                This is <b>Negar</b>. I am a <b>frontend developer</b> based in{" "}
                <b>Montreal</b> and originally from <b>Iran</b>. I have studied
                physics with the dream of becoming an astrophysicist, before I
                start self-sudying web development. You can read the full story{" "}
                <Link
                  href="https://dev.to/negarjf/to-all-of-my-talented-sisters-28jk"
                  isExternal
                  textDecoration="underline"
                >
                  here
                </Link>
                .
              </Text>

              <Text size="lg">
                Throughout my working experience as a web developer I've worked
                with different tools and frameworks, such as <b>Vue</b> and{" "}
                <b>React</b>. I am passionate about{" "}
                <Link
                  textDecoration="underline"
                  href="https://blog.negar.dev"
                  isExternal
                >
                  <b>blogging</b>
                </Link>
                {" and "}
                <Link
                  textDecoration="underline"
                  href="https://www.youtube.com/playlist?list=PLRhXi4CWm3mN0OZ0Z3OFS_foP8TY-Ms1Y"
                  isExternal
                >
                  <b>public speaking</b>
                </Link>
                .
              </Text>
            </VStack>
          </GridItem>
          <GridItem
            bg="gray.500"
            rowSpan={[1, 2, 3]}
            colSpan={[2, 2, 1]}
            order={[1, 1, 2]}
            boxSize="full"
            backgroundImage="url('assets/avatar.jpg')"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundSize="cover"
          />
          <GridItem
            as={Flex}
            colSpan={2}
            order={3}
            bg="gray.50"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            pt={4}
          >
            <SocialLinks />
            <Box mt="4" textAlign="center">
              <Text fontSize="xs" color="gray.500">
                © Negar Jamalifard | 2022
              </Text>
              <Link fontSize="xs" href="https://icons8.com" color="gray.500">
                Icons by Icons8
              </Link>
            </Box>
          </GridItem>
        </Grid>
      </Grid>
    </Container>
  );
}
