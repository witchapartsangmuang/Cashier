import axios from 'axios'
import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import {
    useDispatch,
    useSelector
} from "react-redux"
import Header from "../components/Header"

function EditProductDetail() {

    const params = useParams()
    const ProdId = params.ProdId
    const urlpath = useLocation()
    const dispatch = useDispatch()

    const Category = useSelector((state) => state.Category?.Category)

    const editProdId = useSelector((state) => state.Product?.ProdId)
    const editProdName = useSelector((state) => state.Product?.ProdName)
    const editProdDesc = useSelector((state) => state.Product?.ProdDesc)
    const editProdPrice = useSelector((state) => state.Product?.ProdPrice)
    const editProdBarcode = useSelector((state) => state.Product?.ProdBarcode)
    const editProdCateId = useSelector((state) => state.Product?.ProdCateId)
    const editProdIsActive = useSelector((state) => state.Product?.ProdIsActive)

    const updateProductDetail = () => {
        axios.put(`http://localhost:8080/UpdateProductDetail`
            , {
                editProdId: editProdId,
                editProdName: editProdName,
                editProdDesc: editProdDesc,
                editProdPrice: editProdPrice,
                editProdBarcode: editProdBarcode,
                editCateId: editProdCateId,
                editIsActive: editProdIsActive
            }
        ).then(() => {
            window.location.href = "/productManage"
        }).catch((err) => console.log(err))
    }

    useEffect(() => {
        dispatch.Product.fetchproductdetail({ ProdId: ProdId })
        dispatch.Category.fetchCategory({ urlpath: urlpath.pathname })
    }, [])

    return (
        <div className="Page">
            <Header />
            <div className="content">
                <div className="ProductDetailDiv">
                    <div className="ProductInfo">
                        <div className="ProductTitle">
                            <p>รหัสสินค้า</p>
                        </div>
                        <div className="ProductData">
                            <input value={editProdId} disabled onChange={(event) => { dispatch.Product.editProdId({ editProdId: event.target.value }) }} />
                        </div>
                    </div>
                    <div className="ProductInfo">
                        <div className="ProductTitle">
                            <p>ชื่อสินค้า</p>
                        </div>
                        <div className="ProductData">
                            <input value={editProdName} onChange={(event) => { dispatch.Product.editProdName({ editProdName: event.target.value }) }} />
                        </div>
                    </div>
                    <div className="ProductInfo">
                        <div className="ProductTitle">
                            <p>คำอธิบายสินค้า</p>
                        </div>
                        <div className="ProductData">
                            <input value={editProdDesc} onChange={(event) => { dispatch.Product.editProdDesc({ editProdDesc: event.target.value }) }} />
                        </div>
                    </div>
                    <div className="ProductInfo">
                        <div className="ProductTitle">
                            <p>ราคาสินค้าต่อชิ้น</p>
                        </div>
                        <div className="ProductData">
                            <input value={editProdPrice} onChange={(event) => { dispatch.Product.editProdPrice({ editProdPrice: event.target.value }) }} />
                        </div>
                    </div>
                    <div className="ProductInfo">
                        <div className="ProductTitle">
                            <p>รหัสบาร์โค้ต</p>
                        </div>
                        <div className="ProductData">
                            <input value={editProdBarcode} onChange={(event) => { dispatch.Product.editProdBarcode({ editProdBarcode: event.target.value }) }} />
                        </div>
                    </div>
                    <div className="ProductInfo">
                        <div className="ProductTitle">
                            <p>หมวดหมู่ของสินค้า</p>
                        </div>
                        <div className="ProductData">
                            <select value={editProdCateId} onChange={(event) => { dispatch.Product.editProdCateId({ editProdCateId: event.target.value }) }}>
                                {
                                    Category.map((cate, index) => {
                                        return (
                                            <option key={index} value={cate.CateId}>{cate.CateName}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="ProductInfo">
                        <div className="ProductTitle">
                            <p>การใช้งาน</p>
                        </div>
                        <div className="ProductData">
                            <select value={editProdIsActive} onChange={(event) => { dispatch.Product.editProdIsActive({ editIsActive: event.target.value }) }}>
                                <option value="true">ใช้งาน</option>
                                <option value="false">ไม่ใช่งาน</option>
                            </select>
                        </div>
                    </div>
                    <div className="buttonDiv">
                        <button className="submitButton" onClick={updateProductDetail}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditProductDetail