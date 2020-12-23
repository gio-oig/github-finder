import styled from 'styled-components';

const NavBarContainer = styled.header`
	min-height: 10vh;
	background-color: #bae8e8;
	display: flex;
	align-items: center;
`;

const Navigation = styled.nav`
	width: 90%;
	margin: auto;
	display: flex;
	align-items: center;
`;

const NavLogo = styled.h1`
	margin-right: 2rem;
	font-weight: 500;
	font-size: 30px;
	color: #272343;
`;

const SearchContainer = styled.div`
	position: relative;
	overflow: hidden;
`;
const Search = styled.input`
	width: 100%;
	padding: 0.5rem;
	border-radius: 1rem;
	font-size: 1.8rem;

	outline: none;
	border: none;
`;
const SearchButton = styled.button`
	position: absolute;
	padding: 0.4rem 0.7rem;
	left: ${({ focus }) => (focus ? `78%` : `100%`)};
	top: 50%;
	transform: translateY(-50%);
	color: #fff;
	background-color: #272343;
	border-radius: 1rem;
	border: none;
	font-size: 1.8rem;
	transition: 0.5s ease-in-out;
	outline: none;
	cursor: pointer;
`;

export {
	NavBarContainer,
	Navigation,
	NavLogo,
	SearchContainer,
	Search,
	SearchButton,
};
