import { Box, Button, Flex, Grid, Link, Icon, Image, Text, useColorModeValue } from '@chakra-ui/react';
// Assets
import heroImageLight from 'assets/img/hero/hero-image-light.png';
import heroBgLight from 'assets/img/hero/heroBgLight.png';
import { JavascriptLogo, NextLogo, ReactLogo, TypescriptLogo, TailwindLogo } from 'components/icons/Icons';
import { MdChevronRight } from 'react-icons/md';
// Custom components
import { VSeparator } from 'components/separator/Separator';
import InnerContent from 'layouts/innerContent';
import React from 'react';

export default function Hero() {
	const background = useColorModeValue(heroBgLight);
	const heroImage = useColorModeValue(heroImageLight);
	// Chakra Color Mode
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = useColorModeValue('secondaryGray.700', 'white');
	return (
		<Flex
			w='100%'
			direction={{ base: 'column', xl: 'row' }}
			pt={{
				base: '130px',
				md: '140px',
				xl: '190px',
				'2xl': '210px',
				'3xl': '250px'
			}}
			pb={{ base: '0px', lg: '80px', xl: '170px' }}
			overflow='hidden'
			bgImage={background}
			bgPosition={{ base: 'top', lg: 'unset' }}
			bgSize='cover'
			position='relative'>
			<InnerContent w='1170px' maxW='100%' px={{ base: '20px', md: '40px', xl: '0px' }}>
				<Flex maxW='100%' direction='column' width='stretch'>
					<Box maxW='100%'>
						<Text
							color={textColor}
							fontSize={{ base: '26px', md: '38px', xl: '46px' }}
							mb='30px'
							fontWeight='600'>
							XeroCodee
							<br />
							<Text as='span' fontWeight='800'>
								.drag .drop .publish
							</Text>
						</Text>
						<Text
							color={textColorSecondary}
							fontSize='lg'
							w={{ base: '100%', lg: '55%', xl: '45%' }}
							mb='30px'>
							With the help of the top "no-code" software development platform. XeroCodee, anyone can create, publish, and maintain their own software applications, tech products, or tools to address business issues.
						</Text>
						<Flex align='center' mb='30px'>
							<Link href='/'>
								<Button
									py='20px'
									px='16px'
									fontSize='sm'
									variant='brand'
									borderRadius='12px'
									me={{ base: '20px', md: '30px' }}
									w='180px'
									h='54px'>
									10x Faster
									<Icon as={MdChevronRight} color='white' h='16px' w='16px' />
								</Button>
							</Link>

							<Icon
								as={JavascriptLogo}
								color={textColor}
								w='26px'
								h='24px'
								me={{ base: '14px', md: '25px' }}
							/>
							<Icon
								as={ReactLogo}
								color={textColor}
								w='26px'
								h='24px'
								me={{ base: '14px', md: '25px' }}
							/>
							<Icon
								as={NextLogo}
								color={textColor}
								w='18px'
								h='25px'
								me={{ base: '14px', md: '20px' }}
							/>
							<Icon
								as={TypescriptLogo}
								color={textColor}
								w='18px'
								h='25px'
								me={{ base: '14px', md: '20px' }}
							/>
							<Icon 
								as={TailwindLogo}
								color={textColor}
								w='39px'
								h='23px' 
							/>
						</Flex>
						<Flex align='center'>
							<Text
								color={textColorSecondary}
								fontWeight='700'
								fontSize={{ base: '38px', md: '46px' }}
								lineHeight='100%'>
								Welcome
							</Text>
							<VSeparator mx='30px' h='30px' color={textColorSecondary} />
							<Text color={textColorSecondary} fontWeight='400' fontSize='sm'>
								Coming Soon . . .
							</Text>
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
			</InnerContent>
			<Image
				src={heroImage}
				w={{ lg: '740px', xl: '930px' }}
				bottom='-20px'
				mt={{ base: '20px', lg: 'unset' }}
				right={{
					base: '-40px',
					lg: '-250px',
					xl: '-210px',
					'2xl': '-174px',
					'3xl': '-30px'
				}}
				position={{ base: 'relative', lg: 'absolute' }}
			/>
		</Flex>
	);
}
