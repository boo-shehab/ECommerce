import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeaturesSection from '../components/Products/FeaturesSection'

const placeHolderProducts = [
    {
        _id: 1,
        name: "project 1",
        price: 100,
        images: [{url: 'https://picsum.photos/500/500?random=3', altText: 'project 1'}]
    },
    
    {
        _id: 2,
        name: "project 2",
        price: 100,
        images: [{url: 'https://picsum.photos/500/500?random=4', altText: 'project 2'}]
    },
    {
        _id: 3,
        name: "project 3",
        price: 100,
        images: [{url: 'https://picsum.photos/500/500?random=5', altText: 'project 3'}]
    },
    {
        _id: 4,
        name: "project 4",
        price: 100,
        images: [{url: 'https://picsum.photos/500/500?random=6', altText: 'project 4'}]
    },
    {
        _id: 5,
        name: "project 5",
        price: 100,
        images: [{url: 'https://picsum.photos/500/500?random=7', altText: 'project 5'}]
    },
    
    {
        _id: 6,
        name: "project 6",
        price: 100,
        images: [{url: 'https://picsum.photos/500/500?random=8', altText: 'project 6'}]
    },
    {
        _id: 7,
        name: "project 7",
        price: 100,
        images: [{url: 'https://picsum.photos/500/500?random=9', altText: 'project 7'}]
    },
    {
        _id: 8,
        name: "project 8",
        price: 100,
        images: [{url: 'https://picsum.photos/500/500?random=10', altText: 'project 8'}]
    }
]

const Home = () => {
  return (
    <div>
        <Hero />
        <GenderCollectionSection />
        <NewArrivals />

        <h2 className='text-center text-3xl font-bold mb-4'>Best Seller</h2>
        <ProductDetails />

        <div className='container mx-auto'>
            <h2 className='text-center text-3xl font-bold mb-4'>Top wears for Women</h2>
            <ProductGrid products={placeHolderProducts}/>
        </div>

        <FeaturedCollection />
        <FeaturesSection />
    </div>
  )
}

export default Home