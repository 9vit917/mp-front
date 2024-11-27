import { Helmet } from 'react-helmet'
import { TestDiv } from './styled'
import { PageWrapper } from 'App.styled'


const ProductDetailsPage: React.FC = () => {
	return <>
		<Helmet>
			<title>Product Details Page</title>
		</Helmet>
		<PageWrapper>
			<TestDiv>Product Details Page</TestDiv>
		</PageWrapper>
	</>
}

export default ProductDetailsPage;