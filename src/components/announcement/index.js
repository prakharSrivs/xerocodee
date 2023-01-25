/*eslint-disable*/
import React from "react";
import { Flex, Icon, Text, Link } from "@chakra-ui/react";
import Bg from "assets/img/layout/Announcement.png";
export default function Footer() {
  return (
    <Link href='/'>
      <Flex
        px={{
          base: "20px",
          xl: "unset",
        }}
        bg={`url(${Bg})`}
        w='100%'
        bgPosition='center'
        h={{ base: "60px", lg: "60px" }}
        bgSize='cover'>
        <Flex
          mx='auto'
          my='auto'
          align='center'
          w='100%'
          maxW='1170px'     
          justifyContent='space-between'>
          <Flex flexDirection='row' mx='auto'>
            <Text
              fontSize={{ base: "sm", md: "sm" }}
              mb='unset'
              color='white'
              lineHeight='120%'
              textAlign='center'
              fontWeight='700'>
              If you only give it a try, you won't want to stop using it. The more websites you make, the more time you'll save! 🏆
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
}
