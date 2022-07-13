import axios from 'axios'
import { useEffect, useState } from "react"
import {
    useDispatch,
    useSelector
} from "react-redux"
import { Link, useLocation } from 'react-router-dom'

import Toast from './Toast'

function ProductDisplay() {

    const urlpath = useLocation()

    const dispatch = useDispatch()
    const Productlist = useSelector((state) => state.Product?.Product)
    const [toastlist, settoastlist] = useState([])

    const notification = (ProdName) => {
        const toasttitle = "เพิ่มเข้ารายการสั่งซื้อสำเร็จ"
        const toastInfo = {
            toasttitle: toasttitle,
            toastcontext: ProdName
        }
        settoastlist([...toastlist, toastInfo])
    }

    const addtocart = (ProdBarcode) => {
        axios.post(`http://localhost:8080/AddToCart`, {
            ProdBarcode: ProdBarcode
        })
    }

    useEffect(() => {
        dispatch.Product.fetchproduct({
            cateId: 0,
            IsActive: true,
            urlpath: urlpath.pathname
        })
    }, [])

    return (
        <div>
            <div className="ProductTableHeader">
                <div className="ProductTableColumnIndex">ลำดับ</div>
                <div className="ProductTableColumnCategory">หมวดหมู่</div>
                <div className="ProductTableColumnProdName">ชื่อสินค้า</div>
                <div className="ProductTableColumnProdDesc">คำอธิบายสินค้า</div>
                <div className="ProductTableColumnProdPrice">ราคาต่อชิ้น</div>
                <div className="ProductTableColumnProdBarcode">รหัสบาร์โค้ต</div>
                <div className="ProductTableColumnAction">แอคชั่น</div>
            </div>
            {
                Productlist.map((ProductInfo, index) => {
                    const ProdName = ProductInfo.ProdName
                    const ProdId = ProductInfo.ProdId
                    const pathname = 'EditProductDetail/' + ProdId
                    return (
                        <div className="ProductTableItem" key={index + 1}>
                            <div className="ProductTableColumnIndex" style={{ paddingTop: "5px" }}>{index + 1}</div>
                            <div className="ProductTableColumnIndex" style={{ paddingTop: "5px" }}>{ProductInfo.CateName}</div>
                            <div className="ProductTableColumnProdName" style={{ paddingTop: "5px" }}>{ProductInfo.ProdName}</div>
                            <div className="ProductTableColumnProdDesc" style={{ paddingTop: "5px" }}>{ProductInfo.ProdDesc}</div>
                            <div className="ProductTableColumnProdPrice" style={{ paddingTop: "5px" }}>{ProductInfo.ProdPrice}</div>
                            <div className="ProductTableColumnProdBarcode" style={{ paddingTop: "5px" }}>{ProductInfo.ProdBarcode}</div>
                            <div className="ProductTableColumnAction">
                                <button className="ActionButton" onClick={() => { addtocart(ProductInfo.ProdBarcode); notification(ProdName); }}>เพิ่มเข้าตะกร้า</button>
                            </div>
                        </div>
                    )
                })
            }
            {
                toastlist.map((toastprops, index) => {
                    return (
                        <Toast key={index} toastprops={toastprops} />
                    )
                })
            }
        </div>
    )
}
export default ProductDisplay