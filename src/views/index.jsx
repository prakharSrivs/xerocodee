import React from 'react';
// Chakra imports
import { Flex } from '@chakra-ui/react';
// Custom components
import Hero from 'sections/hero';
// import Tools from 'sections/tools';
import Version from 'sections/version';
import GetStarted from 'sections/started';
import OpenSource from 'sections/openSource';
import Numbers from 'sections/numbers';
import Overview from 'sections/overview';
export default function Default() {
	return (
		<Flex direction={{ base: 'column' }}>
			<Hero />
			<Overview />
			<Version />
			<GetStarted />
			<OpenSource />
			<Numbers />
			{/* <Tools /> */}
		</Flex>
	);
}
