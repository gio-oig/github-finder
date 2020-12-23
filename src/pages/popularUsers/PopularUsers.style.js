import styled from 'styled-components';

const Container = styled.section`
	width: 90%;
	margin: 4rem auto 0 auto;
	padding: 2rem;
	border: 1rem;
	border-radius: 1rem;
	background-color: #fff;
`;
const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Title = styled.h2`
	font-weight: 500;
	font-size: 2rem;
`;
const Switch = styled.img`
	cursor: pointer;
	width: 30px;
	height: 30px;
`;

const UsersListContainer = styled.div`
	display: grid;
	grid-template-columns: 100%; // 200px
	grid-template-rows: auto;
	margin-top: 2rem;

	${(prop) => {
		if (prop.view !== 'list') {
			return {
				gridTemplateColumns: 'repeat(auto-fit,200px)',
				gridGap: '50px',
				justifyContent: 'space-evenly',
			};
		}
	}}
`;

export { Container, Header, Title, Switch, UsersListContainer };
