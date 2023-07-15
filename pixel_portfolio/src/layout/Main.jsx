import { Outlet } from 'react-router-dom'
import Header from '../shared/Header.jsx'
const Main = () => {
	return (
		<div>
			<Outlet></Outlet>

		</div>
	);
};

export default Main;
