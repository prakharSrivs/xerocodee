/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   ____  ____   ___  
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| |  _ \|  _ \ / _ \ 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || |  | |_) | |_) | | | |
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |  |  __/|  _ <| |_| |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___| |_|   |_| \_\\___/ 
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.horizon-ui.com/pro/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from 'react';
// Chakra imports
import { Flex } from '@chakra-ui/react';
// Custom components
import Hero from 'sections/hero';
import Tools from 'sections/tools';
import Upgrade from 'sections/upgrade';
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
			<Tools />
			<Upgrade />
		</Flex>
	);
}
