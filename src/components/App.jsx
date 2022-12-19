import { Navigate, Route, Routes } from 'react-router-dom';
import { Photos } from 'pages/Photos';
import { CurrencyConverter } from 'pages/CurrencyConverter';
import { UsersList } from 'pages/UsersList';
import { Quiz } from 'pages/Quiz';
import { OpenModal } from 'pages/OpenModal';
import { Counter } from 'pages/Counter';
import { Layout } from './Layout';
import '../shared/styles/style.scss';

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Photos/>} />
				<Route path="currencyConverter" element={<CurrencyConverter/>} />
				<Route path="usersList" element={<UsersList/>} />
				<Route path="quiz" element={<Quiz />} />
				<Route path="modal" element={<OpenModal />} />
				<Route path="counter" element={<Counter />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Route>
		</Routes>
	);
};
