import {
  Box,
  Button,
  Flex,
  Icon,
  Link,
  Menu,
  MenuButton,
  // MenuItem,
  // MenuList,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { VSeparator } from "components/separator/Separator";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { IoLogoGithub, IoLogoSlack, IoMdMoon, IoMdSunny } from "react-icons/io";
import { IoLogoDiscord, IoMenuOutline } from "react-icons/io5";
import Logo from "assets/img/logo/logo.png";


export default function AdminNavbar(props) {
  const [scrolled, setScrolled] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  });

  const { secondary, message } = props;

  let textColor = useColorModeValue("secondaryGray.900", "white");
  let navbarPosition = "fixed";
  let navbarFilter = "none";
  let navbarBackdrop = "blur(20px)";
  let navbarShadow = "none";
  let navbarBg = useColorModeValue("whiteAlpha.500", "rgba(11,20,55,0.5)");
  let navbarBorder = "transparent";
  let secondaryMargin = "90px";
  let paddingX = "15px";
  let gap = "0px";
  // let menuBg = useColorModeValue("white", "navy.800");
  // const shadow = useColorModeValue(
  //   "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
  //   "14px 17px 40px 4px rgba(112, 144, 176, 0.06)"
  // );
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  if (scrolled) secondaryMargin = "0px";
  else secondaryMargin = "55px";
  return (
    <Box
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      backgroundPosition='center'
      backgroundSize='cover'
      zIndex='2'
      borderRadius='16px'
      borderWidth='1.5px'
      borderStyle='solid'
      transitionDelay='0s, 0s, 0s, 0s'
      transitionDuration=' 0.25s, 0.25s, 0.25s, 0s'
      transition-property='box-shadow, background-color, filter, border'
      transitionTimingFunction='linear, linear, linear, linear'
      alignItems={{ xl: "center" }}
      display={secondary ? "block" : "flex"}
      minH='75px'
      justifyContent={{ xl: "center" }}
      lineHeight='25.6px'
      mx='auto'
      mt={secondaryMargin}
      pb='8px'
      left='50%'
      transform='translate(-50%,0px)'
      px={{
        sm: paddingX,
        md: "10px",
      }}
      ps={{
        xl: "12px",
      }}
      pt='8px'
      top={{ base: "12px", md: "16px", xl: "18px" }}
      w={{
        base: "calc(100vw - 6%)",
        md: "calc(100vw - 8%)",
        lg: "calc(100vw - 6%)",
        xl: "calc(100vw - 250px)",
        "2xl": "1200px",
      }}>
      <Flex
        w='100%'
        flexDirection={{
          sm: "row",
          md: "row",
        }}
        alignItems='center'
        mb={gap}>

        <Link href='/'>
            <input type="image" img src = {Logo} alt="Logo" width="200" height="65" />
        </Link>

        <Flex ms='auto'>
          <Link
            display={{ base: "none", lg: "block" }}
            href='/'
            color={textColor}
            fontSize='sm'
            fontWeight='700'
            me='30px'
            my='auto'>
            Features
          </Link>
          <Link
            display={{ base: "none", lg: "block" }}
            href='/'
            color={textColor}
            fontSize='sm'
            fontWeight='700'
            me='30px'
            my='auto'>
            Teams
          </Link>
          <VSeparator
            me='14px'
            bg={textColor}
            display={{ base: "none", lg: "block" }}
          />
          <Link
            display={{ base: "none", lg: "block" }}
            href='https://docs.xerocodee.com/'
            color={textColor}
            fontSize='sm'
            fontWeight='500'
            me='30px'
            my='auto'>
            Docs
          </Link>
          <Link
            display={{ base: "none", lg: "block" }}
            href='https://blog.xerocodee.com/'
            color={textColor}
            fontSize='sm'
            fontWeight='500'
            me='30px'
            my='auto'>
            Blog
          </Link>
          <VSeparator
            me='14px'
            bg={textColor}
            display={{ base: "none", lg: "block" }}
          />
          <Link
            my='auto'
            href='https://discord.gg/PzyuFAeeWa'>
            <Button
              variant='no-hover'
              h='max-content'
              w='max-content'
              bg='transparent'
              my='auto'>
              <Icon as={IoLogoDiscord} color={textColor} w='18px' h='18px' />
            </Button>
          </Link>
          <Link
            my='auto'
            href='https://join.slack.com/t/xerocodee/shared_invite/zt-1m8t478v7-p~XGsbw8t96tVhDkqQqPwg'>
            <Button
              variant='no-hover'
              h='max-content'
              w='max-content'
              bg='transparent'
              my='auto'>
              <Icon as={IoLogoSlack} color={textColor} w='18px' h='18px' />
            </Button>
          </Link>
          <Link
            my='auto'
            href='https://github.com/xerocodee'>
            <Button
              variant='no-hover'
              h='max-content'
              w='max-content'
              bg='transparent'
              my='auto'>
              <Icon as={IoLogoGithub} color={textColor} w='18px' h='18px' />
            </Button>
          </Link>

          <Button
            variant='no-hover'
            h='max-content'
            w='max-content'
            bg='transparent'
            my='auto'
            me='10px'
            onClick={toggleColorMode}>
            <Icon
              h='18px'
              w='18px'
              color={textColor}
              as={colorMode === "light" ? IoMdMoon : IoMdSunny}
            />
          </Button>
          <Menu>
            <MenuButton
              display={{ base: "block", lg: "none" }}
              p='0px !important'
              mt={{ base: "0px", md: "1px" }}
              maxH='20px'
              maxW='20px'
              me={{ base: "30px", lg: "0px" }}
              alignContent='end'>
              <Icon
                mt='2px'
                display={{ base: "block", lg: "none" }}
                as={IoMenuOutline}
                color={textColor}
                w='20px'
                h='20px'
                me='10px'
                _hover={{ cursor: "pointer" }}
              />
            </MenuButton>
          </Menu>

          <Link
            href='https://builder-liard.vercel.app/'
            display={{ base: "none", lg: "block" }}>
            <Button
              variant='no-hover'
              border='1px solid'
              borderColor={textColor}
              color={textColor}
              fontSize='sm'
              borderRadius='12px'
              bg='transparent'
              my='auto'>
              DASHBOARD
            </Button>
          </Link>
        </Flex>
      </Flex>
      {secondary ? <Text color='white'>{message}</Text> : null}
    </Box>
  );
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
};
