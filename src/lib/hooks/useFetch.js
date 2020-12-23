import { useCallback, useState } from 'react';

const useFetch = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = useCallback(async (url) => {
		setLoading(true);
		try {
			const responce = await fetch(url);
			if (!responce.ok) {
				throw new Error(responce.message || 'faled to fetch data');
			}
			const data = await responce.json();
			setLoading(false);
			return data;
		} catch (error) {
			setError(error.message);
			setLoading(false);
			throw error;
		}
	}, []);

	const getUserWithRepos = async (user) => {
		setLoading(true);
		const profileResponse = await fetch(`https://api.github.com/users/${user}`);
		const repoResponse = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=3`
		);

		const profile = await profileResponse.json();
		const repos = await repoResponse.json();

		setLoading(false);
		return {
			profile,
			repos,
		};
	};

	return { loading, sendRequest, getUserWithRepos };
};

export default useFetch;
