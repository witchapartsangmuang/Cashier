import Header from "../components/Header"
import CategoryDisplay from "../components/CategoryDisplay"
import ProductDisplay from "../components/ProductDisplay"

function Home () {
    return (
        <div className="Page">
            <Header/>
            <CategoryDisplay/>
            <ProductDisplay/>
        </div>
    )}
export default Home