import React from 'react';

import {
	UserContainer,
	UserAvatar,
	InfoContainer,
	Username,
	UserType,
} from './PopularUser.style';

const PopularUser = ({ user, displayType }) => {
	return (
		<>
			<UserContainer view={displayType}>
				<UserAvatar src={user.avatar_url} view={displayType} />
				<InfoContainer view={displayType}>
					<Username to={`/${user.login}`}>{user.login}</Username>
					<UserType>{user.type}</UserType>
				</InfoContainer>
			</UserContainer>
		</>
	);
};

export default PopularUser;
