import { useEffect, useState } from 'react';
import useMediaQuery from '../hook/useMediaQuery';
import { IconButton } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';

const Scroll = () => {
  const [showButton, setShowButton] = useState(false);
  const { colorMode } = useColorMode();
  const isLargerThan800 = useMediaQuery(800);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showButton && (
        <IconButton
          onClick={scrollToTop}
          variant="ghost"
          size="sm"
          icon={<FaArrowUp />}
          position="fixed"
          bottom={isLargerThan800 ? '2rem' : '1rem'}
          right={isLargerThan800 ? '2rem' : '1rem'}
          zIndex={100}
          backgroundColor={colorMode === 'light' ? '#fff' : '#000'}
          _hover={{
            backgroundColor: colorMode === 'light' ? '#5E81AC' : '#90CDF4',
            color: colorMode === 'light' ? '#FFFFFF' : '#000000'
          }}
          _active={{
            backgroundColor: colorMode === 'light' ? '#5E81AC' : '#90CDF4',
            color: colorMode === 'light' ? '#FFFFFF' : '#000000'
          }}
          aria-label={''}
        />
      )}
    </>
  );
};

export default Scroll;
