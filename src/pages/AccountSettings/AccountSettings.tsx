import { Helmet } from 'react-helmet'
import { TestDiv } from './styled'


const AccountSettings: React.FC = () => {
	return <>
		<Helmet>
			<title>Account settings</title>
		</Helmet>
		<TestDiv>Account settings</TestDiv>
	</>
}

export default AccountSettings;