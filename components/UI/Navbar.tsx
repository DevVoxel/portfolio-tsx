// @ts-nocheck
import React from 'react';
import {
  Button,
  Flex,
  Box,
  Slide,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  useColorMode,
  Image,
  Center,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  Text,
  SimpleGrid,
  ModalFooter,
  HStack
} from '@chakra-ui/react';
import Link from 'next/link';
import useMediaQuery from '../../hook/useMediaQuery';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsMoonFill, BsFillSunFill, BsGearFill } from 'react-icons/bs';

export default function Navbar({ enableTransition }) {
  const isLargerThan768 = useMediaQuery(768);
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer
  } = useDisclosure();
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal
  } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();

  const NavbarDrawer = () => (
    <>
      <Drawer isOpen={isOpenDrawer} placement="right" onClose={onCloseDrawer}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            borderColor={colorMode === 'light' ? '#000000' : '#FFFFFF'}
          >
            <Image
              borderTop={'4vw'}
              borderRadius="10px"
              cursor="pointer"
              w="32px"
              h="32px"
              src={
                colorMode === 'light'
                  ? 'https://images.ctfassets.net/gpz0vzuizl3q/6mmTyMbqxsT9nky5PM2FYY/1435ff9dd9abb16351405d57fb7b412d/JuneIconV2.gif?h=250'
                  : 'https://images.ctfassets.net/gpz0vzuizl3q/6mmTyMbqxsT9nky5PM2FYY/1435ff9dd9abb16351405d57fb7b412d/JuneIconV2.gif?h=250'
              }
              alt={'Voxel20'}
            />
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing="24px">
              <Link href="/" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Home
                </Button>
              </Link>
              <Link href="/projects" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Projects
                </Button>
              </Link>
              <Link href="/blog" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Blog
                </Button>
              </Link>
            </Stack>
          </DrawerBody>
          <Link href="/workshop" passHref>
            <Button as="a" variant={'ghost'} fontSize={'16px'} mb={15}>
              <BsGearFill />
              Workshop
            </Button>
          </Link>
        </DrawerContent>
      </Drawer>
    </>
  );

  return (
    <Box>
      <Slide
        direction="top"
        in={true}
        transition={
          enableTransition
            ? { enter: { duration: 0.5, delay: 0.01 } }
            : { enter: { duration: 0, delay: 0 } }
        }
      >
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          px={'4vw'}
          py={{ base: '1.5vh', md: '3vh' }}
          zIndex={99}
          backgroundColor={colorMode === 'light' ? '#FFFFFF' : '#121212'}
          borderBottom={'1px'}
          borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
        >
          <Link href="/" passHref>
            <Image
              borderTop={'4vw'}
              borderRadius="10px"
              w={{ base: '32px', md: '46px' }}
              h={{ base: '32px', md: '46px' }}
              src={
                colorMode === 'light'
                  ? 'https://images.ctfassets.net/gpz0vzuizl3q/6mmTyMbqxsT9nky5PM2FYY/1435ff9dd9abb16351405d57fb7b412d/JuneIconV2.gif?h=250'
                  : 'https://images.ctfassets.net/gpz0vzuizl3q/6mmTyMbqxsT9nky5PM2FYY/1435ff9dd9abb16351405d57fb7b412d/JuneIconV2.gif?h=250'
              }
              alt={'Voxel20'}
            />
          </Link>
          {isLargerThan768 ? (
            <>
              <Center>
                <Link href={'/'} passHref>
                  <Button as="a" variant={'ghost'} p="4" fontSize={'16px'}>
                    Home
                  </Button>
                </Link>
                <Link href={'/projects'} passHref>
                  <Button
                    as="a"
                    variant={'ghost'}
                    p="4"
                    ml="3vw"
                    fontSize={'16px'}
                  >
                    Projects
                  </Button>
                </Link>
                <Link href={'/blog'} passHref>
                  <Button
                    as="a"
                    variant={'ghost'}
                    p="4"
                    ml="3vw"
                    fontSize={'16px'}
                  >
                    Blog
                  </Button>
                </Link>
                <Link href={'/workshop'} passHref>
                  <Button
                    as="a"
                    variant={'ghost'}
                    p="4"
                    ml="3vw"
                    fontSize={'16px'}
                  >
                    Workshop
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  p="4"
                  ml="3vw"
                  fontSize={'16px'}
                  onClick={toggleColorMode}
                >
                  {colorMode === 'dark' ? <BsMoonFill /> : <BsFillSunFill />}
                </Button>
              </Center>
            </>
          ) : (
            <Center>
              <Button
                variant="ghost"
                p="4"
                ml="3vw"
                fontSize={'16px'}
                onClick={onOpenDrawer}
              >
                <AiOutlineMenu />
              </Button>
              <NavbarDrawer />
            </Center>
          )}
        </Flex>
      </Slide>
    </Box>
  );
}
