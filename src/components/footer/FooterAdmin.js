/*eslint-disable*/
import React from "react";
import {
  Flex,
  Link,
  Box,
  Icon,
  List,
  ListItem,
  Badge,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import Logo from "assets/img/free/logo/Logo.png";
import Bg from "assets/img/free/layout/Background.png";
import { FaDiscord } from "react-icons/fa";
import { HSeparator } from "components/separator/Separator";

export default function Footer() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.700", "white");
  const textColorSimmmple = useColorModeValue("secondaryGray.700", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const { toggleColorMode } = useColorMode();
  const textFooter = useColorModeValue("secondaryGray.900", "white");
  return (
    <Flex
      zIndex='3'
      flexDirection={{
        base: "column",
      }}
      alignItems='start'
      justifyContent='space-between'
      pb='30px'>
      <Flex
        px={{
          base: "20px",
          xl: "unset",
        }}
        bg={`url(${Bg})`}
        w='100%'
        bgPosition='center'
        h={{ base: "300px", lg: "250px" }}
        bgSize='cover'>
        <Flex
          my='auto'
          align={{ base: "start", lg: "center" }}
          w='100%'
          maxW='1170px'
          mx='auto'
          justifyContent='space-between'
          flexDirection={{
            base: "column",
            lg: "row",
          }}>
          <Flex
            flexDirection={{
              base: "column",
              lg: "row",
            }}>
            <Icon
              me={{ base: "0px", lg: "40px" }}
              as={FaDiscord}
              color='white'
              w='80px'
              h='80px'
            />
            <Box>
              <Text
                fontSize={{ base: "22px", md: "30px" }}
                color='white'
                fontWeight='700'>
                Connect with the community!
              </Text>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                mb={{ base: "20px", lg: "unset" }}
                color='white'
                fontWeight='700'>
                Feel free to ask questions, report issues, and meet new people.
              </Text>
            </Box>
          </Flex>
          <Link href='/'>
            <Button
              ms={{ base: "0px", lg: "auto" }}
              bg='white'
              color='brand.500'
              _hover={{ bg: "whiteAlpha.800" }}
              _focus={{ bg: "whiteAlpha.900" }}
              _active={{ bg: "white" }}
              borderRadius='12px'
              w='276px'
              h='54px'>
              Join the #HorizonUI Community!
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Flex
        justifyContent='space-between'
        mt='100px'
        w={{ base: "100%", xl: "1170px" }}
        flexDirection={{
          base: "column",
          lg: "row",
        }}
        px={{
          base: "20px",
          xl: "0px",
        }}
        maxW={{ base: "100%", xl: "1170px" }}
        mx='auto'>
        <Box
          maxW={{
            base: "100%",
            lg: "360px",
          }}>
          <Link href='/'>
            <input type="image" img src = {Logo} alt="Logo" width="200" height="65" />
          </Link>
          <Text
            lineHeight='180%'
            fontSize='md'
            color={textColorSecondary}
            fontWeight='400'>
            There is XEROCODEE if there is React/Typescript and a WebApp or MobileApp.
            If you only give it a try, you won't want to stop using it.
            The more websites you make, the more time you'll save.
          </Text>
        </Box>
        <Flex
          direction={{ base: "column", md: "row" }}
          w={{ base: "100%", md: "100%", lg: "100%", xl: "690px" }}>
          <Flex
            direction='column'
            me={{ base: "20px", md: "60px", lg: "14px", xl: "60px" }}
            mt={{ base: "30px", md: "40px", lg: "0px" }}>
            <Text
              mb='20px'
              fontSize='lg'
              color={textFooter}
              fontWeight='700'>
              Resources
            </Text>
            <Link
              href='/'
              fontSize='md'
              color={textColorSecondary}
              fontWeight='400'
              mb='20px'>
              Free version
            </Link>
            <Flex>
              <Link
                href='//affiliates'
                fontSize='md'
                color={textColorSecondary}
                fontWeight='400'
                mb='20px'>
                Affiliate
              <Badge colorScheme='green' ms='6px' py='2px' px='6px' borderRadius='10px'>Earn 30%</Badge>
              </Link>
            </Flex>
            <Link
              href='/'
              fontSize='md'
              color={textColorSecondary}
              fontWeight='400'
              mb='20px'>
              Company
            </Link>
            <Link
              href='/'
              fontSize='md'
              color={textColorSecondary}
              fontWeight='400'>
              Blog
            </Link>
          </Flex>
          <Flex
            direction='column'
            me={{ base: "20px", md: "80px", lg: "50px", xl: "60px" }}
            mt={{ base: "30px", md: "40px", lg: "0px" }}>
            <Text
              mb='20px'
              fontSize='lg'
              color={textFooter}
              fontWeight='700'>
              Help & Support
            </Text>
            <Link
              href='/'
              fontSize='md'
              color={textColorSecondary}
              fontWeight='400'
              mb='20px'>
              Documentation
            </Link>
            <Link
              href='mailto:hello@simmmple.com'
              fontSize='md'
              color={textColorSecondary}
              fontWeight='400'
              mb='20px'>
              Contact Us
            </Link>
            <Link
              href='mailto:xerocodee@gmail.com'
              fontSize='md'
              color={textColorSecondary}
              fontWeight='400'
              mb='20px'>
              Support
            </Link>
            <Link
              href='/'
              fontSize='md'
              color={textColorSecondary}
              fontWeight='400'>
              Roadmap
            </Link>
          </Flex>
          <Flex
            direction='column'
            me={{ base: "20px", md: "80px", lg: "50px", xl: "60px" }}
            mt={{ base: "30px", md: "40px", lg: "0px" }}>
            <Text
              mb='20px'
              fontSize='lg'
              color={textFooter}
              fontWeight='700'>
              Social Media
            </Text>
            <Link
              href='/'
              fontSize='md'
              color={textColorSecondary}
              fontWeight='400'
              mb='20px'>
              Github
            </Link>
            <Link
              href='/'
              fontSize='md'
              color={textColorSecondary}
              fontWeight='400'
              mb='20px'>
              Twitter
            </Link>
            <Link
              href='/'
              fontSize='md'
              color={textColorSecondary}
              fontWeight='400'
              mb='20px'>
              Instagram
            </Link>
            <Link
              href='/'
              fontSize='md'
              color={textColorSecondary}
              fontWeight='400'>
              Facebook
            </Link>
          </Flex>
          <Flex direction='column' mt={{ base: "30px", md: "40px", lg: "0px" }}>
            <Text
              mb='20px'
              fontSize='lg'
              color={textFooter}
              fontWeight='700'>
              Legal Resources
            </Text>
            <Link
              href='/'
              fontSize='md'
              color={textColorSecondary}
              fontWeight='400'
              mb='20px'>
              Terms & Conditions
            </Link>
            <Link
              href='/'
              fontSize='md'
              color={textColorSecondary}
              fontWeight='400'
              mb='20px'>
              Privacy Policy
            </Link>
            <Link
              href='/'
              fontSize='md'
              color={textColorSecondary}
              fontWeight='400'
              mb='20px'>
              License
            </Link>
            <Link
              href='/'
              fontSize='md'
              color={textColorSecondary}
              fontWeight='400'>
              EULA
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <HSeparator mt='75px' mb='50px' maxW='1170px' mx='auto' />
      <Flex mx='auto'>
        <Text me='4px' textColor={textColorSecondary}>
          © 2023 &nbsp; XeroCodee &nbsp; - &nbsp; Readable & Production Ready Code. &nbsp; All Rights Reserved.
        </Text>
      </Flex>
    </Flex>
  );
}
