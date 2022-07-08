import Header from "../components/Header"
import Category from "../components/Category"
import Productlist from "../components/Productlist"
function Home () {
    return (
        <div className="Page">
            <Header/>
            <Category/>
            <Productlist/>
        </div>
    )}
export default Home