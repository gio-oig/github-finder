import styled from 'styled-components';

import { Link } from 'react-router-dom';

const UserContainer = styled.div`
	display: flex;
	flex-direction: row; // column
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
		background-color: #bae8e8;
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
	width: 80px; // 100%
	height: 80px; // 200px
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
	min-height: 50%; //
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
	cursor: pointer;
`;
const UserType = styled.p`
	font-size: 13px;
`;

export { UserContainer, UserAvatar, InfoContainer, Username, UserType };
