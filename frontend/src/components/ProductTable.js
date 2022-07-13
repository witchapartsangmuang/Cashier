import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
    useDispatch,
    useSelector
} from "react-redux"

function ProductTable() {

    const urlpath = useLocation()

    const dispatch = useDispatch()
    const Productlist = useSelector((state) => state.Product?.Product)

    useEffect(() => {
        dispatch.Product.fetchproduct({
            cateId: 0,
            urlpath: urlpath.pathname,
            activefilter: "-",
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
                Productlist.map((Prod, index) => {
                    const ProdId = Prod.ProdId
                    const pathname = 'EditProductDetail/' + ProdId
                    return (
                        <div className="ProductTableItem" key={index + 1}>
                            <div className="ProductTableColumnIndex" style={{ paddingTop: "5px" }}>{index + 1}</div>
                            <div className="ProductTableColumnIndex" style={{ paddingTop: "5px" }}>{Prod.CateName}</div>
                            <div className="ProductTableColumnProdName" style={{ paddingTop: "5px" }}>{Prod.ProdName}</div>
                            <div className="ProductTableColumnProdDesc" style={{ paddingTop: "5px" }}>{Prod.ProdDesc}</div>
                            <div className="ProductTableColumnProdPrice" style={{ paddingTop: "5px" }}>{Prod.ProdPrice}</div>
                            <div className="ProductTableColumnProdBarcode" style={{ paddingTop: "5px" }}>{Prod.ProdBarcode}</div>
                            <div className="ProductTableColumnAction">
                                {Prod.ProdIsActive ? (
                                    <button className="ActionButton Active">ใช้งาน</button>
                                ) : (
                                    <button className="ActionButton InActive">ไม่ใช้งาน</button>
                                )}
                                <Link to={pathname}>
                                    <button className="ActionButton">แก้ไข</button>
                                </Link>
                                <button className="ActionButton">ลบ</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductTable