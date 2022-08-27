import { Route, Routes as DefaultRouter } from 'react-router-dom';
import HomePage from '@pages/HomePage';

const Routes = () => {
	return (
		<DefaultRouter>
			<Route path="/" element={<HomePage />} />
			<Route path="/aide" element={<h1>Aide</h1>} />
		</DefaultRouter>
	);
};

export default Routes;
