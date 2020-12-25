import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/shared/loadingSpinner/LoadingSpinner';
import NotFound from '../../components/shared/notFound/NotFound';
import useFetch from '../../lib/hooks/useFetch';

import { Container } from '../popularUsers/PopularUsersPage.style';
import {
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
	RepoName,
	RepoContainer,
	Repo,
} from './UserPage.style';

const UserPage = () => {
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [organization, setOrganization] = useState([]);
	const { loading, getUserWithRepos, error } = useFetch();
	const { username } = useParams();

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { profile, repos, organization } = await getUserWithRepos(
					username
				);

				setUser(profile);
				setRepos(repos);
				setOrganization(organization);
			} catch (error) {
				console.log(error);
			}
		};
		fetchUser();
	}, [getUserWithRepos, username]);

	useEffect(() => {
		console.log(repos);
	}, [repos]);

	return (
		<div>
			{loading && <LoadingSpinner asOverlay />}
			{error && !loading && <NotFound />}
			{!error && !loading && (
				<Container>
					<Profile>
						<div>
							<ImgContainer>
								<Avatar src={user.avatar_url} />
							</ImgContainer>
							<UserName href={user.html_url} target="_blank">
								{user.name || username}
							</UserName>
						</div>
						<UserInfoContainer>
							<DataBox color="00A8CC">
								Public Repos: {user.public_repos}
							</DataBox>
							<DataBox color="00CC83">Followers: {user.followers}</DataBox>
							<DataBox color="17a2b8">Following: {user.following}</DataBox>
							<InfoListContainer>
								<InfoItem>Company: {user.company || 'null'}</InfoItem>
								<InfoItem>Location: {user.location || 'null'}</InfoItem>
								<InfoItem>Type: {user.type}</InfoItem>
								<InfoItem>Member Since: {user.created_at}</InfoItem>
							</InfoListContainer>
						</UserInfoContainer>
					</Profile>
					<Title>Organizations</Title>
					<OrganizationsContainer>
						{organization.length ? (
							organization.map((org) => (
								<OrganizationCard key={org.id}>
									<OrgImgWrapper>
										<Avatar src={org.avatar_url} />
									</OrgImgWrapper>
									<h3>{org.login}</h3>
								</OrganizationCard>
							))
						) : (
							<h1>Not Found</h1>
						)}
					</OrganizationsContainer>
					<Title>Latest Repos</Title>
					<RepoContainer>
						{repos.map((repo) => (
							<Repo key={repo.id}>
								<RepoName href={repo.html_url} target="_blank">
									{repo.name}
								</RepoName>
								<div>
									<DataBox>Stars: {repo.stargazers_count}</DataBox>
									<DataBox>Watchers: {repo.watchers_count}</DataBox>
								</div>
							</Repo>
						))}
					</RepoContainer>
				</Container>
			)}
		</div>
	);
};

export default UserPage;
