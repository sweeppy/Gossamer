import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import Login from './Components/Auth/Login';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import UpdatePage from './Components/Updates/UpdatePage';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="" element={<MainPage />}></Route>
				<Route path="/Login" element={<Login />}></Route>
				<Route path="/CreateAccount" element={<CreateAccount />}></Route>
				<Route path="/Updates" element={<UpdatePage />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
