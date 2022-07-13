import axios from 'axios'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
    useDispatch,
    useSelector
} from "react-redux"
import Header from "../components/Header"

function EditProductDetail() {

    const params = useParams()
    const ProdId = params.ProdId
    const dispatch = useDispatch()

    const Category = useSelector((state) => state.Category?.Category)
    // const ProductDetail = useSelector((state) => state.Product?.ProductDetail)

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
        )
        .then(() => {window.location.href = "/productManage"})
    }

    useEffect(() => {
        dispatch.Category.fetchCategory()
        dispatch.Product.fetchproductdetail({ ProdId: ProdId })
    }, [])

    return (
        <div className="Page">
            <Header />
            <div className="content">
                <div className="ProductDetailDiv">
                    <div className="ProductInfo">
                        <div className="ProductTitle">
                            <p>ชื่อสินค้า</p>
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
                            <p>ชื่อสินค้า</p>
                        </div>
                        <div className="ProductData">
                            <input value={editProdDesc} onChange={(event) => { dispatch.Product.editProdDesc({ editProdDesc: event.target.value }) }} />
                        </div>
                    </div>
                    <div className="ProductInfo">
                        <div className="ProductTitle">
                            <p>ชื่อสินค้า</p>
                        </div>
                        <div className="ProductData">
                            <input value={editProdPrice} onChange={(event) => { dispatch.Product.editProdPrice({ editProdPrice: event.target.value }) }} />
                        </div>
                    </div>
                    <div className="ProductInfo">
                        <div className="ProductTitle">
                            <p>ชื่อสินค้า</p>
                        </div>
                        <div className="ProductData">
                            <input value={editProdBarcode} onChange={(event) => { dispatch.Product.editProdBarcode({ editProdBarcode: event.target.value }) }} />
                        </div>
                    </div>
                    <div className="ProductInfo">
                        <div className="ProductTitle">
                            <p>ชื่อสินค้า</p>
                        </div>
                        <div className="ProductData">
                            <select onChange={(event) => { dispatch.Product.editProdCateId({ editProdCateId: event.target.value }) }}>
                                {
                                    Category.map((Cate, index) => {
                                        if (editProdCateId === Cate.CateId) {
                                            return (
                                                <option key={index} value={Cate.CateId} selected>{Cate.CateName}</option>
                                            )
                                        } else {
                                            return (
                                                <option key={index} value={Cate.CateId}>{Cate.CateName}</option>
                                            )
                                        }
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="ProductInfo">
                        <div className="ProductTitle">
                            <p>ชื่อสินค้า</p>
                        </div>
                        <div className="ProductData">
                            <select onChange={(event) => { dispatch.Product.editProdIsActive({ editIsActive: event.target.value }) }}>
                                {
                                    editProdIsActive ? (
                                        <>
                                            <option value="true" selected>ใช้งาน</option>
                                            <option value="false">ไม่ใช่งาน</option>
                                        </>
                                    ) : (
                                        <>
                                            <option value="true">ใช้งาน</option>
                                            <option value="false" selected>ไม่ใช่งาน</option>
                                        </>
                                    )
                                }
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