import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';

import GlobalStyle from './globalStyles';
import PopularUsers from './pages/popularUsers/PopularUsersPage';
import UserPage from './pages/userPage/UserPage';

function App() {
	return (
		<>
			<HashRouter basename="/">
				<GlobalStyle />
				<NavBar />
				<Switch>
					<Route exact path="/" component={PopularUsers} />
					<Route exact path="/:username" component={UserPage} />
				</Switch>
			</HashRouter>
		</>
	);
}

export default App;
