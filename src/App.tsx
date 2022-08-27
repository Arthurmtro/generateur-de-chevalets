import '@styles/reset.postcss';
import '@styles/variables.postcss';

import Routes from './routes';

// Components
import NavBar from '@components/NavBar';
import Layout from '@components/Layout';

// Store
import { AppStateProvider } from './store/AppState';

function App() {
	return (
		<AppStateProvider>
			<NavBar />
			<Layout>
				<Routes />
			</Layout>
		</AppStateProvider>
	);
}

export default App;
