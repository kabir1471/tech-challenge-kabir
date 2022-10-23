import React, { FC } from 'react';
import { CONSTANTS } from '../../../assets/constants.assets';

interface IImageProps {
	src: string;
	alt: string;
	width?: string;
	height?: string
}

const Image: FC<IImageProps> = (props) => {
	const {
		src, alt, width, height,
	} = props;
	return (
		<img className="card-img-top" style={{ width, height }} src={`${CONSTANTS.IMG_LINK}${src}`} alt={alt} />
	);
};

export default Image;
