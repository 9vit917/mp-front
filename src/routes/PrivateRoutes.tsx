import { lazy } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { checkPatchMatch, paths } from './helpers';

const AccountSettings = lazy(() => import("pages/AccountSettings"));

const PrivateRoutes: React.FC = () => {
	const location = useLocation();

	const isMatch = checkPatchMatch(location.pathname, paths);

	return (
		<Routes>
			<Route path={paths.accountSettings} element={<AccountSettings />} />
			<Route path="*" element={!isMatch ? <Navigate to={paths.home} /> : null} />
		</Routes>
	)
}

export default PrivateRoutes;