import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import Login from './Components/Auth/Login';
import CreateAccont from './Components/CreateAccount/CreateAccont';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="" element={<MainPage />}></Route>
				<Route path="/Login" element={<Login />}></Route>
				<Route path="/CreateAccount" element={<CreateAccont />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
