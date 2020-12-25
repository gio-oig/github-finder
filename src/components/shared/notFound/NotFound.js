import React from 'react';
import { useHistory } from 'react-router-dom';

import {
	ErrorContainer,
	Errorbox,
	ErrorMessage,
	ErrorIMG,
	Button,
} from './NotFound.style';

const NotFound = () => {
	const history = useHistory();
	return (
		<ErrorContainer>
			<Errorbox>
				<ErrorMessage>Not Found</ErrorMessage>
				<div>
					<ErrorIMG />
				</div>
				<Button onClick={() => history.push('/')}>Back</Button>
			</Errorbox>
		</ErrorContainer>
	);
};

export default NotFound;
