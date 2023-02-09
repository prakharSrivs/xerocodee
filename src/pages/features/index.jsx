import React from 'react';
// Chakra imports
import { Flex } from '@chakra-ui/react';
// Custom components
import Hero from '../../sections/hero';
export default function Default() {
	return (
		<Flex direction={{ base: 'column' }}>
			<Hero />
		</Flex>
	);
}
