import React from 'react';
// Chakra imports
import { Box, Button, Flex, Image, Link, Text, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
// Assets
import Gtilab from 'assets/img/started/gitlab.png';
import AWS from 'assets/img/started/aws.png';
import Kube from 'assets/img/started/kube.png';
import Grafana from 'assets/img/started/grafana.png';



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
							Application life-cycle Orchestration
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
									Gitlab
								</Text>
								<Link
									mt={{ base: '20px', md: 'unset' }}
									w='max-content'
									color={brandColor}
									fontWeight='700'
									href='https://about.gitlab.com/'
									fontSize='md'
									whiteSpace='nowrap'>
									<Button
										borderRadius='12px'
										bg='#E24329'
										color='#fff'
										_hover={{ opacity: 0.8 }}
										h={{ base: '34px', md: '54px' }}
										fontSize={{ base: 'xs', md: 'sm' }}>
										Gitlab {'>'}
									</Button>
								</Link>
							</Box>
							<Image
								src={Gtilab}
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
									AWS
								</Text>
								<Link
									mt={{ base: '20px', md: 'unset' }}
									w='max-content'
									color={brandColor}
									fontWeight='700'
									href='https://aws.amazon.com/'
									fontSize='md'
									whiteSpace='nowrap'>
									<Button
										borderRadius='12px'
										bg='#FF9900'
										color='#000000'
										_hover={{ opacity: 0.8 }}
										h={{ base: '34px', md: '54px' }}
										fontSize={{ base: 'xs', md: 'sm' }}>
										AWS {'>'}
									</Button>
								</Link>
							</Box>
							<Image
								src={AWS}
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
									Kubernetes
								</Text>
								<Link
									mt={{ base: '20px', md: 'unset' }}
									w='max-content'
									color={brandColor}
									fontWeight='700'
									href='https://kubernetes.io/'
									fontSize='md'
									whiteSpace='nowrap'>
									<Button
										borderRadius='12px'
										bg='#326CE5'
										color='#ffffff'
										_hover={{ opacity: 0.8 }}
										h={{ base: '34px', md: '54px' }}
										fontSize={{ base: 'xs', md: 'sm' }}>
										Kubernetes {'>'}
									</Button>
								</Link>
							</Box>
							<Image
								src={Kube}
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
									Grafana
								</Text>
								<Link
									mt={{ base: '20px', md: 'unset' }}
									w='max-content'
									color={brandColor}
									fontWeight='700'
									href='https://grafana.com/'
									fontSize='md'
									whiteSpace='nowrap'>
									<Button
										borderRadius='12px'
										bg='#F48423'
										color='#000000'
										_hover={{ opacity: 0.8 }}
										h={{ base: '34px', md: '54px' }}
										fontSize={{ base: 'xs', md: 'sm' }}>
										Grafana {'>'}
									</Button>
								</Link>
							</Box>
							<Image
								src={Grafana}
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
