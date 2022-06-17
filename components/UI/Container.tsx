// @ts-nocheck
import React from 'react';
import { Flex, Stack, Text, Link } from '@chakra-ui/react';
import Navbar from './Navbar';
import useMediaQuery from '../../hook/useMediaQuery';
import { useColorMode } from '@chakra-ui/react';

export default function Container({ enableTransition, children }) {
  const { colorMode } = useColorMode();
  const isLargerThan768 = useMediaQuery(768);

  return (
    <>
      <Navbar enableTransition={enableTransition} />
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        px={isLargerThan768 ? '15vw' : '8vw'}
        py={isLargerThan768 ? '4vw' : '8vw'}
      >
        {children}
      </Flex>
      <Stack alignItems="center" mb={5}>
        <Text textAlign="center" fontSize="sm">
          Developed by Aiden Smith.
          <br />
          Built with{' '}
          <Link
            href="https://nextjs.org/"
            fontWeight="semibold"
            color={colorMode === 'light' ? '#5E81AC' : '#90CDF4'}
            isExternal
          >
            Next.js
          </Link>
          . Hosted on{' '}
          <Link
            href="https://suro.club/"
            fontWeight="semibold"
            color={colorMode === 'light' ? '#5E81AC' : '#90CDF4'}
            isExternal
          >
            Suro
          </Link>{' '}
          private servers.
        </Text>
      </Stack>
    </>
  );
}
