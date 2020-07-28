import React, { useEffect, useState } from 'react';
import { useColorMode, List, ListItem, Flex, Heading, Box } from '@chakra-ui/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Global, css } from '@emotion/core';
import Footer from './Footer';

const people = [
	{ name: 'George Floyd', href: 'https://blacklivesmatter.com/rest-in-power-beautiful/' },
	{ name: 'Breonna Taylor', href: 'https://www.standwithbre.com/' },
	{ name: 'Ahmaud Arbery', href: 'https://www.runwithmaud.com/' },
	{
		name: 'Quanice Hayes',
		href: 'https://www.opb.org/news/article/quanice-hayes-portland-police-deadly-shooting-lawsuit/',
	},
	{
		name: 'Sandra Bland',
		href:
			'https://www.chicagotribune.com/columns/dahleen-glanton/ct-met-dahleen-glanton-sandra-bland-cellphone-video-20190510-story.html',
	},
	{ name: 'Eric Garner', href: 'https://www.newyorker.com/culture/video-dept/eric-garners-family-is-still-grieving' },
	{
		name: 'Philando Castille',
		href:
			'https://www.aclu.org/blog/racial-justice/two-years-after-police-killing-philando-castile-justice-continues-be-denied',
	},
	{ name: 'Tamir Rice', href: '#' },
	{ name: 'Aiyana Stanley', href: '#' },
	{ name: 'Trayvon Martin', href: '#' },
	{ name: 'Walter Scott', href: '#' },
	{ name: 'Oscar Grant', href: '#' },
];

export default function App(): JSX.Element {
	const { colorMode } = useColorMode();
	const [visibleCount, setVisibleCount] = useState(1);
	const listItems = people.slice(0, visibleCount);

	console.log('rerender');

	useEffect(() => {
		setInterval(() => {
			setVisibleCount((count) => count + 1);
		}, 2000);
	}, []);

	// base
	// 480px upwards
	// 768px upwards
	// 992px upwards
	const flexDirection: ('column' | 'row')[] = ['column', 'column', 'row', 'row'];
	const textAlign: ('left' | 'right')[] = ['left', 'left', 'right', 'right'];
	const responsiveStyles = {
		padding: [6, 12],
		paddingTop: [6, 12, 24, 32],
		backgroundColor: ['cyan.200', 'cyan.400', 'cyan.600', 'cyan.800'],
		fontSize: ['6xl', '6xl', '6xl', '7xl'],
		headingWidth: ['100%', '100%', 1 / 3],
		listWidth: ['100%', '100%', 2 / 3],
		marginRight: [2, 3],
		flexDirection,
		textAlign,
	};

	return (
		<>
			<Box
				backgroundColor={`${colorMode}.background`}
				className="main"
				p={responsiveStyles.padding}
				pt={responsiveStyles.paddingTop}
			>
				<Flex flexDirection={responsiveStyles.flexDirection}>
					<Heading
						fontSize={responsiveStyles.fontSize}
						mr={3}
						textAlign={responsiveStyles.textAlign}
						color={`${colorMode}.heading`}
						width={responsiveStyles.headingWidth}
					>
						Justice for
					</Heading>

					<List width={responsiveStyles.listWidth}>
						<TransitionGroup>
							{listItems.map(({ name }) => (
								<CSSTransition key={name} timeout={500} classNames="name">
									<ListItem key={name}>
										<Heading fontSize={responsiveStyles.fontSize} color={`${colorMode}.text`}>
											{name}
										</Heading>
									</ListItem>
								</CSSTransition>
							))}
						</TransitionGroup>
					</List>
				</Flex>
			</Box>
			<Footer />
			<Global
				styles={css`
					.name-enter {
						opacity: 0;
					}

					.name-enter-active {
						opacity: 1;
						transition: opacity 500ms ease-in;
					}

					.name-exit {
						opacity: 1;
					}

					.name-exit-active {
						opacity: 0;
						transition: opacity 500ms ease-in;
					}
				`}
			/>
		</>
	);
}
