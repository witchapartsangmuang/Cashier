import axios from 'axios'
import { useEffect } from "react"
import {
    useDispatch,
    useSelector
} from "react-redux"
function Productlist() {

    const dispatch = useDispatch()
    const Productlist = useSelector((state) => state.Product?.Product)

    const addtocart = (ProdBarcode) => {
        axios.post(`http://localhost:8080/AddToCart`, {
            ProdBarcode: ProdBarcode
        })
    }
    
    useEffect(() => {
        dispatch.Product.fetchproduct({ cateId: 0 })
    }, [])

    return (
        <div>
            <div className="ProductTableHeader">
                <div className="ColumnIndex">ลำดับ</div>
                <div className="ColumnProdName">ชื่อสินค้า</div>
                <div className="ColumnProdDesc">คำอธิบายสินค้า</div>
                <div className="ColumnProdPrice">ราคาต่อชิ้น</div>
                <div className="ColumnProdBarcode">รหัสบาร์โค้ต</div>
                <div className="ColumnAction">แอคชั่น</div>
            </div>
            {
                Productlist.map((ProductInfo, index) => {
                    return (
                        <div className="ProductItem" key={index + 1}>
                            <div className="ColumnIndex">{index + 1}</div>
                            <div className="ColumnProdName">{ProductInfo.ProdName}</div>
                            <div className="ColumnProdDesc">{ProductInfo.ProdDesc}</div>
                            <div className="ColumnProdPrice">{ProductInfo.ProdPrice}</div>
                            <div className="ColumnProdBarcode">{ProductInfo.ProdBarcode}</div>
                            <div className="ColumnAction"><button onClick={() => addtocart(ProductInfo.ProdBarcode)}>add to cart</button></div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Productlist