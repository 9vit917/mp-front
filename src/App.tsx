import { AppStyles, Footer } from 'App.styled';
import Header from 'features/Header';
import { Suspense } from 'react';
// import PrivateRoutes from 'routes/PrivateRoutes';
import PublicRoutes from 'routes/PublicRoutes';

export const App = () => {
	return <>
		<AppStyles />
		<Header />
		<Suspense fallback="Loading ...">
			<PublicRoutes />
			{/* <PrivateRoutes /> */}
		</Suspense>

		<Footer>
			<div>Marketplace Kavi</div>
		</Footer>
	</>;
};
