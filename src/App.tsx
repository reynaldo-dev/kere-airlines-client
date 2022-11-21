import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AppRouter } from './routing/AppRouter';

function App() {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
}

export default App;
