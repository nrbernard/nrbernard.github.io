import React from 'react';
import {
	Box,
	IconButton,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	PopoverFooter,
	Text,
	Link,
	List,
	ListItem,
	PopoverHeader,
	Heading,
} from '@chakra-ui/core';

const orgs = [
	{ href: 'https://www.blackresiliencefund.com/', name: 'Black Resilience Fund' },
	{ href: 'https://www.dontshootpdx.org/', name: "Don't Shoot PDX" },
	{ href: 'https://www.iwilldomore.org/', name: 'Do. Do more. Do better.' },
	{ href: 'https://ulpdx.org/', name: 'Urban League of Portland' },
];

const lists = [
	{ href: 'https://blacklivesmatters.carrd.co/', name: 'Ways to Help' },
	{ href: 'https://blacklivesmatter.carrd.co/', name: '#BLM' },
	{ href: 'https://issuesintheworld.carrd.co/', name: 'Issues Going On In The World' },
];

const resources = [
	{ name: 'Portland Organizations', items: orgs },
	{ name: 'Lists', items: lists },
];

export default function Footer(): JSX.Element {
	return (
		<Box position="fixed" bottom={8} right={8}>
			<Popover trigger="hover" placement="top-end">
				<PopoverTrigger>
					<IconButton isRound size="lg" variant="ghost" variantColor="orange" aria-label="What can I do?" icon="info" />
				</PopoverTrigger>

				<PopoverContent border="0" width={320}>
					<PopoverArrow />
					<PopoverHeader>
						<Heading as="h3" color="gray.700">
							Resources
						</Heading>
					</PopoverHeader>
					<PopoverBody>
						{resources.map(({ name, items }) => (
							<Box key={name} mb={2}>
								<Heading as="h4" size="lg" color="gray.700">
									{name}
								</Heading>
								<List styleType="none">
									{items.map(({ href, name }) => (
										<ListItem key={name} color="gray.700">
											<Link href={href} isExternal color="orange.500">
												{name}
											</Link>
										</ListItem>
									))}
								</List>
							</Box>
						))}
					</PopoverBody>
					<PopoverFooter>
						<Text textAlign="right">
							Built by{' '}
							<Link isExternal href="https://github.com/nrbernard" color="orange.500">
								Nick Bernard
							</Link>
						</Text>
					</PopoverFooter>
				</PopoverContent>
			</Popover>
		</Box>
	);
}
