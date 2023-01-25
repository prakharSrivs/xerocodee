import React from 'react';
// Chakra imports
import { Box, Flex, Button, Icon, Grid, Image, Text, Link, useColorModeValue } from '@chakra-ui/react';

// Assets
import imageDark from 'assets/img/started/section4-dark.png';
import imageLight from 'assets/img/started/section4-light.png';
import { MdChevronRight } from 'react-icons/md';

// Custom components
import InnerContent from 'layouts/innerContent';

export default function GetStarted() {
	const image = useColorModeValue(imageLight, imageDark);
	// Chakra Color Mode
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = useColorModeValue('secondaryGray.700', 'white');
	const borderColor = useColorModeValue('secondaryGray.100', 'white');
	return (
		<Flex
			w='100%'
			direction={{ base: 'column' }}
			pt={{ base: '50px', md: '50px', xl: '70px' }}
			pb={{ base: '20px', md: '0px', xl: '70px' }}
			overflow='hidden'
			bgSize='cover'
			position='relative'>
			<InnerContent px={{ base: '20px', md: '40px', xl: '0px' }}>
				<Flex direction={{ base: 'column', lg: 'row' }} width='100%'>
					<Flex me='110px' direction='column' width='stretch'>
						<Box my='auto'>
							<Text
								fontWeight='700'
								letterSpacing='2px'
								bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
								bgClip='text'
								fontSize='sm'
								w='100%'
								mb='10px'>
								HORIZON'S MAIN FEATURES
							</Text>
							<Text
								fontWeight='800'
								color={textColor}
								fontSize={{ base: '26px', md: '48px' }}
								lineHeight={{ base: '34px', md: '60px' }}
								mb='20px'
								maxW={{ base: '80%', md: 'unset' }}>
								Turn your datas into a beautiful dashboard
							</Text>
							<Text color={textColorSecondary} fontSize='lg' w={{ base: '90%', md: '100%' }} mb='30px'>
								The beauty of Horizon is that you can give life to all of your data into a dashboard
								with a very modern and beautiful UI!
							</Text>
							<Flex align='center' mb='30px'>
								<Flex me={{ base: '20px', md: '50px' }} direction='column'>
									<Text
										color={textColor}
										fontWeight='800'
										fontSize={{ base: '30px', md: '38px' }}
										lineHeight='100%'
										mb='10px'>
										70+
									</Text>
									<Text
										color={textColorSecondary}
										fontWeight='700'
										fontSize={{ base: 'xs', md: 'sm' }}
										letterSpacing='2px'>
										COMPONENTS
									</Text>
								</Flex>
								<Flex me='50px' direction='column'>
									<Text
										color={textColor}
										fontWeight='800'
										fontSize={{ base: '30px', md: '38px' }}
										lineHeight='100%'
										mb='10px'>
										7+
									</Text>
									<Text
										color={textColorSecondary}
										fontWeight='700'
										fontSize={{ base: 'xs', md: 'sm' }}
										letterSpacing='2px'>
										EXAMPLES
									</Text>
								</Flex>
							</Flex>
							<Flex align='center'>
								<Link href='#version'>
									<Button
										py='20px'
										px='16px'
										fontSize='sm'
										variant='brand'
										borderRadius='12px'
										me='20px'
										w='160px'
										h='54px'>
										Try Horizon now
										<Icon as={MdChevronRight} color='white' h='16px' w='16px' />
									</Button>
								</Link>
								<Link href='https://horizon-ui.com/horizon-ui-chakra/'>
									<Button
										variant='no-hover'
										border='1px solid'
										borderColor={borderColor}
										color={textColor}
										borderRadius='12px'
										me='30px'
										w='160px'
										h='54px'
										bg='transparent'
										my='auto'>
										Live preview
									</Button>
								</Link>
							</Flex>
						</Box>
						<Grid
							mb='20px'
							gridTemplateColumns={{
								base: 'repeat(2, 1fr)',
								'2xl': '720fr 350fr'
							}}
							gap='20px'
							display={{ base: 'block', lg: 'grid' }}>
							<Flex
								gridArea={{
									base: '1 / 1 / 2 / 3',
									'2xl': '1 / 1 / 2 / 2'
								}}
							/>
							<Flex
								gridArea={{
									base: '2 / 1 / 3 / 3',
									'2xl': '1 / 2 / 2 / 3'
								}}
							/>
						</Grid>
					</Flex>
					<Image
						src={image}
						w={{ base: '100%', md: '100%', lg: '400px', xl: '565px' }}
						mt={{ base: '40px', md: '40px', lg: '0px' }}
					/>{' '}
				</Flex>
			</InnerContent>
		</Flex>
	);
}
