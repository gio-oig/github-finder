import React, { useState } from 'react';

import {
	NavBarContainer,
	Navigation,
	NavLogo,
	SearchContainer,
	Search,
	SearchButton,
} from './NavBar.style';

const NavBar = () => {
	const [searchInput, setSearchInput] = useState('');
	const [focus, setFocus] = useState(false);

	const handleFocus = () => {
		setFocus((prev) => !prev);
	};

	const handleChange = (e) => {
		setSearchInput(e.target.value);
	};

	return (
		<NavBarContainer>
			<Navigation>
				<NavLogo>Github Finder</NavLogo>
				<SearchContainer>
					<Search
						type="text"
						placeholder="Find user"
						onFocus={handleFocus}
						onBlur={handleFocus}
						onChange={handleChange}
						value={searchInput}
					/>
					<SearchButton focus={focus}>Find</SearchButton>
				</SearchContainer>
			</Navigation>
		</NavBarContainer>
	);
};

export default NavBar;
