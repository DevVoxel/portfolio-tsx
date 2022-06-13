import Container from "../../components/UI/Container";
import Head from "next/head";
import { useState } from "react";
import {
  Heading,
  Stack,
  Text,
  InputGroup,
  InputRightElement,
  Input,
  Divider,
  Box,
  Flex,
  Link,
  useColorMode,
} from "@chakra-ui/react";
// import { FaSearch } from "react-icons/fa";
import useMediaQuery from "../../hook/useMediaQuery";
import dateFormat from "dateformat";
import readingTime from "reading-time";
import { Image } from "@chakra-ui/react";

export default function IndexBlog({ articles }) {
  const { colorMode } = useColorMode();
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const isLargerThan1024 = useMediaQuery(1024);
  let postTotal = 0;

  return (
    <>
      <Container enableTransition={false}>
        <Head>
          <title>Blog</title>
        </Head>
        <Stack
          spacing={10}
          justifyContent="center"
          my={["10vh", "10vh", "15vh", "15vh"]}
        >
          <Stack spacing={5}>
            <Heading fontSize={{ base: "4xl", md: "6xl" }}>Blog</Heading>
            <Text fontSize={{ base: "14px", md: "16px" }}>
              I will be posting my development experiences, and personal thoughts here.
            </Text>
            {/* <InputGroup maxW={"400px"} zIndex={-1}>
              <InputRightElement pointerEvents={"none"}>
                <FaSearch />
              </InputRightElement>
              <Input
                type="text"
                placeholder={"Search posts"}
                value={query}
                onChange={handleChange}
              />
            </InputGroup> */}
            <Divider />
            {articles
              .map((article) => (
                <Stack
                  key={postTotal++}
                  direction={isLargerThan1024 ? "row" : "column"}
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  pb={4}
                  p={2}
                  borderRadius={"10px"}
                  border="1px"
                  borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
                >
                  <Flex flexDirection="column">
                    <Text fontSize="sm">
                      {dateFormat(
                        Date.parse(article.fields.date),
                        "mmm d yyyy"
                      )}{" "}&bull;{" "}
                      {readingTime(article.fields.body).text}
                    </Text>
                    <Link href={"/blog/" + article.fields.slug} _hover="none">
                      <a>
                        <Text fontSize="xl" fontWeight="bold">
                          {article.fields.title}
                        </Text>
                      </a>
                    </Link>
                    <Text>{article.fields.summary}</Text>
                    <Link href={"/blog/" + article.fields.slug}>
                      <a>
                        <Text color="button1" cursor="pointer">
                          Read more &rarr;
                        </Text>
                      </a>
                    </Link>
                  </Flex>
                </Stack>
              ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "blogPost",
    limit: 100,
    order: "sys.createdAt",
  });

  return {
    props: {
      articles: data.items.reverse(),
    },
  };
}
