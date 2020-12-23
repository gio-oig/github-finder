import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/shared/loadingSpinner/LoadingSpinner';
import useFetch from '../../lib/hooks/useFetch';

const UserPage = () => {
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const { username } = useParams();
	const { loading, getUserWithRepos } = useFetch();

	useEffect(() => {
		const fetchUser = async () => {
			const { profile, repos } = await getUserWithRepos(username);
			setUser(profile);
			setRepos(repos);
		};
		fetchUser();
	}, []);

	return (
		<div>
			{loading && <LoadingSpinner asOverlay />}
			<h1>{user.login}</h1>
		</div>
	);
};

export default UserPage;
