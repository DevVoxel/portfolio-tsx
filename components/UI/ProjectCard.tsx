import { ScaleFade, Stack, Tag, TagLabel, TagLeftIcon, Image, Text, Link, Divider, Box, useColorMode } from "@chakra-ui/react"
import { FaExternalLinkAlt, FaGithub, FaReact } from "react-icons/fa"
import { SiTypescript, SiJavascript, SiNextdotjs, SiCss3, SiHtml5, SiChakraui, SiPrisma } from "react-icons/si"
import { VscTerminalBash } from "react-icons/vsc"
import useMediaQuery from "../../hook/useMediaQuery"

export default function ProjectCard({
    title,
    description,
    image,
    githubLink,
    deployLink,
    tags,
}) {
    const getTag = (tag) => {
        let values = []
        switch (tag) {
            case 'TypeScript': {
                values[0] = 'blue'
                values[1] = SiTypescript
            }
                break;
            case 'JavaScript': {
                values[0] = 'yellow'
                values[1] = SiJavascript
            }
                break;
            case 'Bash': {
                values[0] = 'grey'
                values[1] = VscTerminalBash
            }
                break;
            case 'React': {
                values[0] = 'blue'
                values[1] = FaReact
            }
                break;
            case 'NextJS': {
                values[0] = 'grey'
                values[1] = SiNextdotjs
            }
                break;
            case 'JavaScript': {
                values[0] = 'yellow'
                values[1] = SiJavascript
            }
                break;
            case 'CSS3': {
                values[0] = 'green'
                values[1] = SiCss3
            }
                break;
            case 'HTML5': {
                values[0] = 'red'
                values[1] = SiHtml5
            }
                break;
            case 'ChakraUI': {
                values[0] = 'purple'
                values[1] = SiChakraui
            }
                break;
            case 'Prisma': {
                values[0] = 'cyan'
                values[1] = SiPrisma
            }
                break;
            default: {
                values[0] = 'white'
            }

        }
        return values
    }

    const isLargerThan800 = useMediaQuery(800);
    const isLargerThan480 = useMediaQuery(480);
    const { colorMode } = useColorMode();

    const Tags = tags.map((item) => (
        <Tag
            key={item}
            colorScheme={getTag(item)[0]}
            size={isLargerThan800 ? 'md' : 'sm'}
        >
            <TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
            <TagLabel>{item}</TagLabel>
        </Tag>
    ))

    return (
        <Stack
            borderRadius={"10px"}
            minH={"320px"}
            maxH={"500px"}
            border={"1px"}
            borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
        >
            <ScaleFade in={true}>
                {deployLink ? (
                    <center>
                        <Link href={deployLink} isExternal>
                            <Image
                                width={1250}
                                height={600}
                                w="auto"
                                h="auto"
                                src={image}
                                transition="0.3s"
                                placeholder="blur"
                                borderRadius="10px 10px 0px 0px"
                                alt="project image"
                            ></Image>
                        </Link>
                    </center>
                ) : (
                    <center>
                        <Image
                            width={1250}
                            height={600}
                            w="auto"
                            h="auto"
                            src={image}
                            transition="0.3s"
                            placeholder="blur"
                            borderRadius="10px 10px 0px 0px"
                            alt="project image"
                        ></Image>
                    </center>
                )}
                <Stack px={4} py={2}>
                    <Stack isInline justifyContent={"space-between"} alignItems={"center"}>
                        <Text fontFamily="Ubuntu" fontSize={"2xl"}>
                            {title}
                        </Text>
                        <Stack
                            isInline
                            justifyContent={"flex-end"}
                            alignItems={"center"}
                            spacing={4}
                        >
                            {githubLink ? (
                                <Link
                                    href={githubLink}
                                    color={colorMode === "light" ? "black" : "white"}
                                    isExternal
                                >
                                    <FaGithub size={23} />
                                </Link>
                            ) : (
                                <div />
                            )}
                            {deployLink ? (
                                <Link
                                    href={deployLink}
                                    color={colorMode === "light" ? "black" : "white"}
                                    isExternal
                                >
                                    <FaExternalLinkAlt size={23} />
                                </Link>
                            ) : (
                                <div />
                            )}
                        </Stack>
                    </Stack>
                    {isLargerThan480 ? (
                        <Stack isInline>{Tags}</Stack>
                    ) : (
                        <Stack isInline>
                            <Box>
                                {Tags}
                            </Box>
                        </Stack>
                    )}
                    <Divider />
                    <Text fontSize={['sm', 'md']}>
                        {description}
                    </Text>
                </Stack>
            </ScaleFade>
        </Stack>
    )
}