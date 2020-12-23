import React, { useEffect, useState } from 'react';
import useFetch from '../../lib/hooks/useFetch';

import PopularUser from '../../components/popularUser/PopularUser';
import LoadingSpinner from '../../components/shared/loadingSpinner/LoadingSpinner';

import listImg from '../../assets/list.png';
import groupImg from '../../assets/group.png';

import {
	Container,
	Header,
	Title,
	Switch,
	UsersListContainer,
} from './PopularUsers.style';

const PopularUsers = () => {
	const [users, setUsers] = useState([]);
	const [displayType, setDisplayType] = useState('list');
	const { loading, sendRequest } = useFetch();

	const chageDisplayType = () => {
		// Grid and List toggle
		setDisplayType((prev) => {
			return prev === 'list' ? 'grid' : 'list';
		});
	};

	useEffect(() => {
		const fetchPopularUsers = async () => {
			try {
				const responce = await sendRequest(
					'https://api.github.com/search/users?q=followers:%3E1000'
				);
				setUsers(responce.items);
			} catch (error) {}
		};
		fetchPopularUsers();
	}, [sendRequest]);

	return (
		<Container>
			<Header>
				<Title>Most popular users according github</Title>
				{displayType === 'list' ? (
					<Switch src={listImg} onClick={chageDisplayType} />
				) : (
					<Switch src={groupImg} onClick={chageDisplayType} />
				)}
			</Header>
			<UsersListContainer view={displayType}>
				{loading ? (
					<LoadingSpinner asOverlay />
				) : (
					users.map((user) => (
						<PopularUser user={user} displayType={displayType} key={user.id} />
					))
				)}
			</UsersListContainer>
		</Container>
	);
};

export default PopularUsers;
