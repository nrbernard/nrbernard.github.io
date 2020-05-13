import React, { useState, createRef, useEffect } from 'react';
import styled from 'styled-components';

interface ImageProps {
	alt: string;
	src: string;
}

interface StyleProps {
	loaded: boolean;
}

const Wrapper = styled.div<StyleProps>`
	position: relative;
	overflow: ${({ loaded }): string => (loaded ? 'hidden' : 'initial')};
`;

const PlaceholderImage = styled.img<StyleProps>`
	width: 100%;
	filter: blur(25px);
	opacity: ${({ loaded }): number => (loaded ? 0 : 1)};
	transition: opacity 0.5s ease-in;
`;

const LoadedImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
`;

export default function Image({ alt, src }: ImageProps): JSX.Element {
	const [loaded, setLoaded] = useState(false);
	const imgRef = createRef<HTMLImageElement>();

	function imageLoaded(): void {
		setLoaded(true);
	}

	useEffect(() => {
		if (imgRef.current?.complete) {
			imageLoaded();
		} else {
			imgRef.current?.addEventListener('load', imageLoaded);
		}
	}, []);

	return (
		<Wrapper loaded={loaded}>
			<PlaceholderImage src={require(`../public/${src}?lqip`)} alt={alt} loaded={loaded} />

			<LoadedImage ref={imgRef} src={require(`../public/${src}`)} alt={alt} />
		</Wrapper>
	);
}
