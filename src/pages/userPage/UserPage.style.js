import styled from 'styled-components';

const Profile = styled.div`
	display: flex;
	margin-bottom: 2rem;

	@media (max-width: 650px) {
		flex-wrap: wrap;
	}
`;

const ImgContainer = styled.div`
	width: 250px;
	height: auto;

	@media (max-width: 650px) {
		width: 100%;
	}
`;

const Avatar = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const UserName = styled.a`
	font-size: 3rem;
	text-decoration: none;
	font-weight: 600;
	color: #00a8cc;
	cursor: pointer;
`;

const Title = styled.div`
	font-size: 2rem;
	font-weight: 600;
	margin-top: 2rem;
	color: var(--primary-dark);
`;

const UserInfoContainer = styled.div`
	flex-grow: 1;
	padding: 0 15px;

	@media (max-width: 500px) {
		padding: 0;
	}
`;

const DataBox = styled.div`
	padding: 7px 10px;
	border-radius: 5px;
	font-size: 13px;
	font-weight: 400;
	line-height: 1;
	margin-right: 5px;
	display: inline-block;
	color: #fff;
	background-color: #${({ color }) => color || '00A8CC'};

	@media (max-width: 450px) {
		margin-top: 0.5rem;
	}
`;

const RepoName = styled.a`
	font-size: 1.6rem;
	text-decoration: none;
	font-weight: 500;
	color: #00a8cc;
	cursor: pointer;
`;

const InfoListContainer = styled.ul`
	margin-top: 2rem;
	list-style: none;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 0.5rem;
`;

const InfoItem = styled.li`
	font-size: 16px;
	padding: 1rem 2rem;
	&:not(:last-child) {
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}
`;

const OrganizationsContainer = styled.div`
	display: flex;
	/* margin: 2rem 0; */
`;

const OrganizationCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.5rem;
`;

const OrgImgWrapper = styled.div`
	width: 40px;
	height: 40px;
`;

const RepoContainer = styled.div``;

const Repo = styled.div`
	display: flex;
	margin-bottom: 1rem;
	border: 1px solid rgba(0, 0, 0, 0.2);
	padding: 1rem 0;
	border-radius: 5px;

	& a {
		flex: 1;
		padding-left: 5rem;
	}

	& div {
		flex: 1;
	}

	@media (max-width: 400px) {
		flex-direction: column;
		align-items: center;

		& a {
			padding-left: 0;
		}
	}
`;

export {
	Profile,
	ImgContainer,
	Avatar,
	Title,
	UserName,
	DataBox,
	UserInfoContainer,
	InfoListContainer,
	InfoItem,
	OrganizationsContainer,
	OrganizationCard,
	OrgImgWrapper,
	RepoContainer,
	RepoName,
	Repo,
};
