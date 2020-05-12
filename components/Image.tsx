import React, { useState, createRef, useEffect } from 'react';
import styles from './Image.module.css';
import classnames from 'classnames';

interface ImageProps {
	alt: string;
	src: string;
}

export default function Image({ alt, src }: ImageProps): JSX.Element {
	const [loaded, setLoaded] = useState(false);
	const wrapperClassName = classnames(styles.wrapper, { [styles.wrapperLoaded]: loaded });
	const placeholderClassName = classnames(styles.placeholder, { [styles.placeholderLoaded]: loaded });
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
		<div className={wrapperClassName}>
			<img src={require(`../public/${src}?lqip`)} alt={alt} className={placeholderClassName} />

			<img ref={imgRef} className={styles.image} src={require(`../public/${src}`)} alt={alt} />
		</div>
	);
}
