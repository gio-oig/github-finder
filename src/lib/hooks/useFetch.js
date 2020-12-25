import { useCallback, useState } from 'react';

const useFetch = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = useCallback(async (url) => {
		setLoading(true);
		try {
			const responce = await fetch(url);
			if (!responce.ok)
				throw new Error(responce.message || 'faled to fetch data');

			const data = await responce.json();
			setLoading(false);
			return data;
		} catch (error) {
			setError(error.message);
			setLoading(false);
			throw error;
		}
	}, []);

	const getUserWithRepos = useCallback(async (user) => {
		setLoading(true);
		const profileResponse = await fetch(`https://api.github.com/users/${user}`);
		const repoResponse = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=3`
		);

		const profile = await profileResponse.json();
		const repos = await repoResponse.json();

		if (profile.message === 'Not Found') {
			setError(profile.message);
			setLoading(false);
			throw new Error(profile.message);
		}

		const organizationResponse = await fetch(profile.organizations_url);
		const organization = await organizationResponse.json();

		setLoading(false);
		setError(null);
		return {
			profile,
			repos,
			organization,
		};
	}, []);

	const clearError = () => {
		setError(null);
	};

	return { loading, sendRequest, getUserWithRepos, error, clearError };
};

export default useFetch;
