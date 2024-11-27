import { Helmet } from 'react-helmet'
import { TestDiv } from './styled'
import { PageWrapper } from 'App.styled'


const HomePage: React.FC = () => {
	return <>
		<Helmet>
			<title>Main page</title>
		</Helmet>
		<PageWrapper>
			<TestDiv>Home page</TestDiv>
		</PageWrapper>
	</>
}

export default HomePage;