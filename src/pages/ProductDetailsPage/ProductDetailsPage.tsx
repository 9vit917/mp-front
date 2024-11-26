import { Helmet } from 'react-helmet'
import { TestDiv } from './styled'


const ProductDetailsPage: React.FC = () => {
	return <>
		<Helmet>
			<title>Product Details Page</title>
		</Helmet>
		<TestDiv>Product Details Page</TestDiv>
	</>
}

export default ProductDetailsPage;