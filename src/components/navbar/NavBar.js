import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
	NavBarContainer,
	Navigation,
	NavLogo,
	SearchContainer,
	SearchButton,
	Search,
	SearchHistoryContainer,
	HistoryItem,
} from './NavBar.style';

const NavBar = () => {
	const history = useHistory();
	const [searchInput, setSearchInput] = useState('');
	const [searchHistory, setSearchHistory] = useState([]);
	const [focus, setFocus] = useState(false);

	const handleFocus = () => {
		setFocus((prev) => !prev);
	};

	const handleSearch = (e) => {
		setSearchInput(e.target.value);
	};

	const saveToLocalstorage = (user) => {
		let historiList = JSON.parse(localStorage.getItem('searchHistory'));

		if (!historiList) {
			localStorage.setItem('searchHistory', JSON.stringify([user]));
			return;
		}

		historiList.unshift(user);
		if (historiList.length >= 4) {
			historiList.pop();
		}
		localStorage.setItem('searchHistory', JSON.stringify(historiList));
	};

	const findUser = () => {
		console.log('object');
		saveToLocalstorage(searchInput);
		history.push(`/${searchInput}`);
		setSearchInput('');
	};

	const resaveUser = (e) => {
		console.log('resave');
		const username = e.target.innerHTML;
		saveToLocalstorage(username);
	};

	useEffect(() => {
		let history = JSON.parse(localStorage.getItem('searchHistory'));
		setSearchHistory(history || []);
	}, [focus]);

	return (
		<NavBarContainer>
			<Navigation>
				<NavLogo to="/">Github Finder</NavLogo>
				<SearchContainer>
					<Search
						type="text"
						placeholder="Search..."
						onFocus={handleFocus}
						onBlur={handleFocus}
						onChange={handleSearch}
						value={searchInput}
					/>
					<SearchHistoryContainer focus={focus}>
						{searchHistory.map((item, index) => (
							<HistoryItem to={`/${item}`} key={index} onClick={resaveUser}>
								{item}
							</HistoryItem>
						))}
					</SearchHistoryContainer>
					<SearchButton onClick={findUser} focus={focus}>
						Find
					</SearchButton>
				</SearchContainer>
			</Navigation>
		</NavBarContainer>
	);
};

export default NavBar;
