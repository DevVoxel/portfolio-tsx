import {
    Text,
    Stack,
    Heading,
    chakra,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    Divider,
  } from "@chakra-ui/react";
  import useMediaQuery from "../hook/useMediaQuery";
  import SlideUpWhenVisible from "../hook/slideUpWhenVisable";
  import { useColorMode } from "@chakra-ui/react";
  
  export default function AboutMe() {
    const isLargerThan800 = useMediaQuery(800);
    const { colorMode, toggleColorMode } = useColorMode();
  
    const MoreInfo = ({ text, content }) => {
      return (
        <>
          {" "}
          {isLargerThan800 ? (
            <Popover trigger="hover" placement="top">
              <PopoverTrigger>
                <chakra.span
                  color={colorMode === "light" ? "#5E81AC" : "#90CDF4"}
                  cursor="help"
                >
                  {text}
                </chakra.span>
              </PopoverTrigger>
              <PopoverContent borderColor="button1">
                <PopoverArrow />
                <PopoverBody fontSize="sm">{content}</PopoverBody>
              </PopoverContent>
            </Popover>
          ) : (
            <Text as="span" color={colorMode === "light" ? "#2A4365" : "#90CDF4"}>
              {text}
            </Text>
          )}{" "}
        </>
      );
    };
  
    return (
      <>
        <Stack>
          <SlideUpWhenVisible threshold={undefined}>
            <Stack
              spacing={4}
              mx={{ base: "0", sm: "8vw", md: "12vw", lg: "16vw" }}
              mt={"25vh"}
              mb={"25vh"}
            >
              <Heading fontFamily="Ubuntu" fontSize="2xl">
                About Me.
              </Heading>
              <Text fontSize={{ base: "14px", md: "16px" }} whiteSpace="pre-line">
                Hi! I&apos;m Aiden Smith, and I&apos;ve been working with computers since I was young.  Starting with a website built to help my brothers and I decide on movies to watch back in 2010. <br />
                <br />
                I really liked to build websites that related to my personal needs 
                back in 2010, and from that, I taught myself how to code.
                Nowadays, I develope using various languages like{" "}
                <MoreInfo
                  text="JavaScript,"
                  content="JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat."
                />
                <MoreInfo
                  text="HTML, CSS"
                  content="The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."
                />
                and
                <MoreInfo
                  text="PHP."
                  content="PHP: Hypertext Preprocessor is a general-purpose scripting language.  PHP code is processed server-side by a PHP interpreter implemented as a module, a daemon or as a Common Gateway Interface executable. On a web server, the result of the interpreted and executed PHP code would form an HTTP response."
                />
                I&apos;m interested in building projects that are helpful, and can teach others.  I am currently focused on
                <MoreInfo
                  text="Web Development,"
                  content="Building web-applications using Javascript Frameworks (React.js and Next.js)"
                />
                and
                <MoreInfo
                  text="Discord Server Developement."
                  content="Discord is a VoIP and instant messaging social platform. Users have the ability to communicate with voice calls, video calls, text messaging, media and files in private chats or as part of communities called 'servers'."
                />
                {"  "}Furthering my knowledge with different languages and frameworks.
                <br />
                <br />
                <Divider />
                <i>
                  {"  "}
                  Actively practicing my 
                  <MoreInfo
                    text="Back-End"
                    content="Using Node.js, Express.js, and Laravel to build full-stack applications." 
                  />
                  development skills.
                </i>
                <Divider />
                <br />
                <br />
                When I&apos;m not working, I enjoy riding motorcycles, or playing video games/watching anime with my friends!  I also enjoy learning new things, and I am always looking to learn more about new &amp; upcoming technologies.
              </Text>
            </Stack>
          </SlideUpWhenVisible>
        </Stack>
      </>
    );
  }