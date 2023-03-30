import React from 'react';

// Chakra imports
import { Button, Box, Flex, Text, Link, useColorModeValue } from '@chakra-ui/react';

// Language
import JS from 'assets/img/overview/js.png';
import TS from 'assets/img/overview/ts.png';
import Python from 'assets/img/overview/python.png';

import InnerContent from 'layouts/innerContent';
import PageCard from './components/PageCard';

export default function Overview() {
	// Chakra Color Mode
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const endGradient = useColorModeValue(
		'linear-gradient(360deg, #F7FAFC 17.92%, rgba(247, 250, 252, 0) 100%)',
		'linear-gradient(360deg, #172041 17.92%, rgba(23, 32, 65, 0) 54.26%)'
	);
	return (
		<Flex
			w='100%'
			direction={{ base: 'column' }}
			pt={{ base: '80px', md: '120px', xl: '140px' }}
			overflow='hidden'
			bgSize='cover'
			position='relative'>
			<InnerContent px={{ base: '20px', md: '40px', xl: '0px' }}>
				<Flex direction='column' width='stretch'>
					<Flex
						direction='column'
						mx='auto'
						mb='40px'
						maxW={{ base: '100%', md: '100%', lg: '80%', xl: '70%' }}
						textAlign='center'>
						<Text
							fontWeight='700'
							letterSpacing='2px'
							bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
							bgClip='text'
							fontSize='sm'
							w='100%'
							mb='10px'>
							Create. Code. Publish.
						</Text>
						<Text color={textColor} fontWeight='800' fontSize={{ base: '28px', md: '48px' }} mb='20px'>
							Stunning features. 
						</Text>
					</Flex>
				</Flex>

				<Flex mb='72px' justify='center' w={{ base: '72%', md: '100%' }} flexWrap='wrap'>
					<PageCard
						mb='20px'
						me={{ base: '0px', md: '20px' }}
						title='JavaScript'
						image={JS}
					/>
					<PageCard
						mb='20px'
						me={{ base: '0px', xl: '20px' }}
						title='TypeScript'
						image={TS}
					/>
					<PageCard
						mb='20px'
						me={{ base: '0px', md: '20px', xl: '0px' }}
						title='Python'
						image={Python}
					/>
				</Flex>

				{/* <Flex mb='72px' justify='center' w={{ base: '50%', md: '120%' }} flexWrap='wrap'>
					<PageCard
						mb='20px'
						me={{ base: '0px', md: '20px' }}
						title='Source Code'
						image={Source}
					/>
					<PageCard
						mb='20px'
						me={{ base: '0px', xl: '20px' }}
						title='Animation'
						image={Animation}
					/>
					<PageCard
						mb='20px'
						me={{ base: '0px', md: '20px', xl: '0px' }}
						title='Themes'
						image={Themes}
					/>
					<PageCard
						mb='20px'
						me={{ base: '0px', md: '20px' }}
						title='Database'
						image={Database}
					/>
					<PageCard
						mb='20px'
						me={{ base: '0px', xl: '20px' }}
						title='API'
						image={API}
					/>
				</Flex> */}

				<Link href='/'>
					<Button h='50px' borderRadius='12px' variant='darkBrand' fontSize='sm'>
						See More
					</Button>
				</Link>
			</InnerContent>
			<Box bg={endGradient} h='100px' w='100%' />
		</Flex>
	);
}
