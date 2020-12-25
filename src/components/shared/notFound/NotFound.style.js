import styled from 'styled-components';

import svg from '../../../assets/error-svg.svg';

const ErrorContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 3rem 0;
	background-color: #fff;
`;

const Errorbox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > div {
		margin: 2rem 0;
	}
`;

const ErrorMessage = styled.h1`
	font-size: 4rem;
	color: var(--primary-blue);
`;

const ErrorIMG = styled.img.attrs({
	src: svg,
})`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Button = styled.button`
	width: 20rem;
	height: 3rem;
	border: none;
	font-size: 2rem;
	border-radius: 1rem;
	color: #fff;
	background-color: var(--primary-blue);
	cursor: pointer;
`;

export { ErrorContainer, Errorbox, ErrorMessage, ErrorIMG, Button };
