// import axios from 'axios'
import {
    // useDispatch, 
    useSelector
} from "react-redux"
function Productlist() {
    const Productlist = useSelector((state) => state.Product?.Product)
    const addtocart = (ProdId) => {
        // axios.put(`http://localhost:8080/AddToCart`, { ProdId: ProdId })
    }
    return (
        Productlist.map((ProductInfo, index) => {
            return (
                <div className="ProductItem" key={index + 1}>
                    <div className="ProductItemIndex">{index + 1}</div>
                    <div className="ProductItemProdName">{ProductInfo.ProdName}</div>
                    <div className="ProductItemProdDesc">{ProductInfo.ProdDesc}</div>
                    <div className="ProductItemProdPrice">{ProductInfo.ProdPrice}</div>
                    <div className="ProductItemProdBarcode">{ProductInfo.ProdBarcode}</div>
                    <div className="ProductItemAction"><button onClick={() => addtocart(ProductInfo.ProdId)}>add to cart</button></div>
                </div>
            )
        })
    )
}
export default Productlist