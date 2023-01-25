import React from 'react';
// Chakra imports
import { Box, Button, Flex, Image, Link, Text, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
// Assets
import Typescript from 'assets/img/free/started/Typescript.png';
import Next from 'assets/img/free/started/Next.png';
import Vue from 'assets/img/free/started/Vue.png';
import ReactJS from 'assets/img/free/started/React.png';



// Custom components
import InnerContent from 'layouts/innerContent';
import Card from 'components/card/Card';

export default function Tools() {
	// Chakra Color Mode
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const brandColor = useColorModeValue('brand.500', 'white');
	return (
		<Flex
			w='100%'
			maxW='100%'
			direction={{ base: 'column' }}
			pt={{ base: '40px', md: '60px', xl: '100px' }}
			pb={{ base: '80px', md: '80px' }}
			overflow='hidden'
			bgSize='cover'
			position='relative'
			id='version'>
			<InnerContent>
				<Flex maxW='100%' direction='column' width='stretch' px={{ base: '20px', md: '20px', xl: '0px' }}>
					<Flex
						direction='column'
						mx='auto'
						mb='40px'
						maxW={{ base: '100%', lg: '70%', '2xl': '70%' }}
						textAlign='center'>
						<Text
							fontWeight='700'
							letterSpacing='2px'
							bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
							bgClip='text'
							fontSize='sm'
							w='100%'
							mb='10px'>
							GET STARTED WITH XEROCODEE
						</Text>
						<Text
							color={textColor}
							fontWeight='800'
							fontSize={{ base: '28px', md: '48px' }}
							mb={{ base: '14px', lg: '30px' }}>
							Designers and Developers on one platform
						</Text>
					</Flex>
				</Flex>
				<SimpleGrid w='100%' columns={{ base: '1', lg: '2' }} gap='20px' px='20px'>
					<Card p={{ base: '20px', md: '28px' }} ps={{ base: '20px', md: '40px' }}>
						<Flex align='center' justify='space-between' w='100%'>
							<Box>
								<Text
									fontWeight='800'
									mb='20px'
									color={textColor}
									fontSize={{ base: '20px', md: '32px' }}
									lineHeight={{ base: '140%', md: '100%' }}
									maxW={{ base: '90%', md: 'unset' }}>
									TypeScript
								</Text>
								<Link
									mt={{ base: '20px', md: 'unset' }}
									w='max-content'
									color={brandColor}
									fontWeight='700'
									href='/-ts'
									fontSize='md'
									whiteSpace='nowrap'>
									<Button
										borderRadius='12px'
										bg='#3965FF'
										color='#fff'
										_hover={{ opacity: 0.8 }}
										h={{ base: '34px', md: '54px' }}
										fontSize={{ base: 'xs', md: 'sm' }}>
										TypeScript {'>'}
									</Button>
								</Link>
							</Box>
							<Image
								src={Typescript}
								w={{ base: '70px', md: '130px' }}
								h={{ base: '70px', md: '130px' }}
							/>
						</Flex>
					</Card>
					<Card p={{ base: '20px', md: '28px' }} ps={{ base: '20px', md: '40px' }}>
						<Flex align='center' justify='space-between' w='100%'>
							<Box>
								<Text
									fontWeight='800'
									mb='20px'
									color={textColor}
									fontSize={{ base: '20px', md: '32px' }}
									lineHeight={{ base: '140%', md: '100%' }}
									maxW={{ base: '90%', md: 'unset' }}>
									ReactJS
								</Text>
								<Link
									mt={{ base: '20px', md: 'unset' }}
									w='max-content'
									color={brandColor}
									fontWeight='700'
									href='/'
									fontSize='md'
									whiteSpace='nowrap'>
									<Button
										borderRadius='12px'
										bg='#61DAFB'
										color='#000000'
										_hover={{ opacity: 0.8 }}
										h={{ base: '34px', md: '54px' }}
										fontSize={{ base: 'xs', md: 'sm' }}>
										ReactJS {'>'}
									</Button>
								</Link>
							</Box>
							<Image
								src={ReactJS}
								w={{ base: '70px', md: '130px' }}
								h={{ base: '70px', md: '130px' }}
							/>
						</Flex>
					</Card>
					<Card p={{ base: '20px', md: '28px' }} ps={{ base: '20px', md: '40px' }}>
						<Flex align='center' justify='space-between' w='100%'>
							<Box>
								<Text
									fontWeight='800'
									mb='20px'
									color={textColor}
									fontSize={{ base: '20px', md: '32px' }}
									lineHeight={{ base: '140%', md: '100%' }}
									maxW={{ base: '90%', md: 'unset' }}>
									NextJS
								</Text>
								<Link
									mt={{ base: '20px', md: 'unset' }}
									w='max-content'
									color={brandColor}
									fontWeight='700'
									href='/'
									fontSize='md'
									whiteSpace='nowrap'>
									<Button
										borderRadius='12px'
										bg='#000000'
										color='#ffffff'
										_hover={{ opacity: 0.8 }}
										h={{ base: '34px', md: '54px' }}
										fontSize={{ base: 'xs', md: 'sm' }}>
										NextJS {'>'}
									</Button>
								</Link>
							</Box>
							<Image
								src={Next}
								w={{ base: '70px', md: '130px' }}
								h={{ base: '70px', md: '130px' }}
							/>
						</Flex>
					</Card>
					<Card p={{ base: '20px', md: '28px' }} ps={{ base: '20px', md: '40px' }}>
						<Flex align='center' justify='space-between' w='100%'>
							<Box>
								<Text
									fontWeight='800'
									mb='20px'
									color={textColor}
									fontSize={{ base: '20px', md: '32px' }}
									lineHeight={{ base: '140%', md: '100%' }}
									maxW={{ base: '90%', md: 'unset' }}>
									VueJS
								</Text>
								<Link
									mt={{ base: '20px', md: 'unset' }}
									w='max-content'
									color={brandColor}
									fontWeight='700'
									href='/'
									fontSize='md'
									whiteSpace='nowrap'>
									<Button
										borderRadius='12px'
										bg='#41B883'
										color='#000000'
										_hover={{ opacity: 0.8 }}
										h={{ base: '34px', md: '54px' }}
										fontSize={{ base: 'xs', md: 'sm' }}>
										VueJS {'>'}
									</Button>
								</Link>
							</Box>
							<Image
								src={Vue}
								w={{ base: '70px', md: '130px' }}
								h={{ base: '70px', md: '130px' }}
							/>
						</Flex>
					</Card>
				</SimpleGrid>
			</InnerContent>
		</Flex>
	);
}
