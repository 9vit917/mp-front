import { Helmet } from 'react-helmet'
import { TestDiv } from './styled'


const HomePage: React.FC = () => {
	return <>
		<Helmet>
			<title>Main page</title>
		</Helmet>
		<TestDiv>Home page</TestDiv>
	</>
}

export default HomePage;