// @ts-nocheck
import Container from '../../components/UI/Container';
import Head from 'next/head';
import Scroll from '../../components/Scroll';
import {
  Avatar,
  Heading,
  Stack,
  Text,
  Image,
  Flex,
  useColorMode,
  Divider
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub, FaReact } from 'react-icons/fa';

function Project({ data }) {
  const { colorMode } = useColorMode();
  return (
    <>
      <Container enableTransition={false}>
        <Head>
          <title>{data.title}</title>
        </Head>
        <Stack my="15vh" justifyContent="center" alignItems="center">
          <Stack
            w={['100vw', '95vw']}
            maxW="680px"
            p={['20px', '20px', '24px', '24px']}
          >
            <Heading fontSize={['3xl', '3xl', '5xl', '5xl']} alignSelf="center">
              {data.title}
            </Heading>
            <Stack
              isInline
              justifyContent={'flex-end'}
              alignItems={'center'}
              spacing={4}
            >
              <Text fontFamily="Ubuntu" fontSize={'1xl'}>
                Project Links{' '}
              </Text>
              {data.githubLink ? (
                <Link
                  href={data.githubLink}
                  color={colorMode === 'light' ? 'black' : 'white'}
                  isExternal
                >
                  <FaGithub size={23} />
                </Link>
              ) : (
                <div />
              )}
              {data.deployLink ? (
                <Link
                  href={data.deployLink}
                  color={colorMode === 'light' ? 'black' : 'white'}
                  isExternal
                >
                  <FaExternalLinkAlt size={23} />
                </Link>
              ) : (
                <div />
              )}
            </Stack>
            {/* <Stack
              py={4}
              direction={{ base: 'column', md: 'row' }}
              alignItems="baseline"
              justifyContent={'space-between'}
            >
              <Stack isInline alignItems={'center'}>
                <Avatar
                  name="Voxel20"
                  size="xs"
                  src="https://avatars.githubusercontent.com/u/29802327?v=4"
                  zIndex={-1}
                />
                <Text fontSize={['xs', 'xs', 'sm', 'sm']}>
                  Created by{' '}
                  <Link href="/github" isExternal>
                    Voxel20
                  </Link>
                </Text>
              </Stack>
            </Stack> */}
            <Stack
              borderRadius={'10px'}
              minH="200px"
              border="1px"
              borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
            >
              <Image
                src={'https:' + data.image.fields.file.url}
                borderRadius="10px"
                width={580}
                height={302}
                placeholder="blur"
                w="auto"
                mx="auto"
                alt=""
              ></Image>
            </Stack>
          </Stack>
          <Heading fontSize={('xl', '2xl')}>Project Description</Heading>
          <Divider />
          <Text fontSize={['xs', 'xs', 'sm', 'sm']}>
            {data.longDescription}
          </Text>
        </Stack>
      </Container>
      <Scroll />
    </>
  );
}

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: 'projects'
  });
  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: 'projects',
    'fields.slug': params.slug
  });

  const article = data.items[0].fields;

  return {
    props: {
      data: article
    }
  };
}

export default Project;
