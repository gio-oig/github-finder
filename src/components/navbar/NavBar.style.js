import styled from 'styled-components';

import { Link } from 'react-router-dom';

const NavBarContainer = styled.header`
	min-height: 10vh;
	background-color: var(--primary-blue);
	display: flex;
	align-items: center;
	padding: 10px 0;
`;

const Navigation = styled.nav`
	width: 90%;
	margin: auto;
	display: flex;
	align-items: center;

	@media (max-width: 450px) {
		flex-direction: column;
	}
`;

const NavLogo = styled(Link)`
	margin-right: 2rem;
	font-weight: 500;
	font-size: 3rem;
	text-decoration: none;
	color: #fff;

	@media (max-width: 300px) {
		font-size: 2.5rem;
	}
`;

const SearchContainer = styled.div`
	position: relative;
	width: 300px;
	height: 35px;
	min-width: 50px;

	@media (max-width: 300px) {
		width: 200px;
	}
`;

const Search = styled.input`
	width: 100%;
	height: 100%;
	padding: 0.5rem;
	border-radius: 1rem;
	font-size: 1.8rem;

	color: rgba(39, 35, 67, 0.62);
	outline: none;
	border: none;
`;

const SearchButton = styled.button`
	position: absolute;
	padding: 0.4rem 0.7rem;
	width: 80px;
	height: 30px;
	right: 1%;
	top: 50%;
	opacity: ${({ focus }) => (focus ? 1 : 0)};
	visibility: ${({ focus }) => (focus ? 'visible' : 'hidden')};
	transform: translateY(-50%);
	color: #fff;
	background-color: #00a8cc;
	border-radius: 1rem;
	border: none;
	font-size: 1.8rem;
	font-weight: 600;
	transition: 0.2s ease-in-out;
	outline: none;
	cursor: pointer;
`;

const SearchHistoryContainer = styled.div`
	min-width: 20rem;
	position: absolute;
	top: 110%;
	left: 0;
	display: flex;
	flex-direction: column;
	opacity: 0;
	visibility: hidden;
	border-radius: 5px;
	background-color: #fff;
	transition: 0.4s ease-in-out;

	${({ focus }) => {
		if (focus)
			return {
				opacity: 1,
				visibility: 'visible',
			};
	}}
`;

const HistoryItem = styled(Link)`
	padding: 0.5rem;
	width: auto;
	font-size: 15px;
	text-decoration: none;
	cursor: pointer;
`;

export {
	NavBarContainer,
	Navigation,
	NavLogo,
	SearchContainer,
	Search,
	SearchButton,
	SearchHistoryContainer,
	HistoryItem,
};
