import styled from 'styled-components';

import { Link } from 'react-router-dom';

const UserContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 1rem;
	margin: 0.3rem;
	align-items: center;
	border: 1px solid #c5c5c5;
	position: relative;
	border-radius: 3px;
	transition: all 0.2s ease-in-out;

	&::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 0;
		height: 100%;
		transition: 0.3s ease-in-out;
		background-color: var(--lignt-blue);
		opacity: 0.8;
	}

	&:hover::before {
		width: 5px;
	}

	${(prop) => {
		if (prop.view !== 'list') {
			return {
				flexDirection: 'column',
				margin: 0,
				padding: 0,
				':hover::before': {
					content: 'none',
				},
			};
		}
	}}
`;

const UserAvatar = styled.img`
	width: 80px;
	height: 80px;
	border-radius: 50%;

	${(prop) => {
		if (prop.view !== 'list') {
			return {
				width: '100%',
				height: '200px',
				objectFit: 'cover',
				borderRadius: 0,
			};
		}
	}}
`;

const InfoContainer = styled.div`
	display: flex;
	min-height: 50%;
	margin-left: 1rem;
	flex-direction: column;
	justify-content: space-between;

	${(prop) => {
		if (prop.view !== 'list') {
			return {
				padding: '5px',
				margin: 0,
				alignSelf: 'flex-start',
				justifyContent: 'start',
			};
		}
	}}
`;

const Username = styled(Link)`
	font-size: 17px;
	font-weight: 600;
	text-decoration: none;
	color: var(--primary-dark);
	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}
`;
const UserType = styled.p`
	font-size: 13px;
`;

export { UserContainer, UserAvatar, InfoContainer, Username, UserType };
