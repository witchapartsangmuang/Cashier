import axios from 'axios'
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import {
    useDispatch,
    useSelector
} from "react-redux"
import { useEffect, useState } from 'react'

function EditCategoryDetail() {

    const params = useParams()
    const dispatch = useDispatch()
    const editCateId = useSelector((state) => state.Category?.CateId)
    const editCateName = useSelector((state) => state.Category?.CateName)
    const editCateImg = useSelector((state) => state.Category?.CateImg)
    const editCateIsActive = useSelector((state) => state.Category?.CateIsActive)

    const updateCategoryDetail = () => {
        axios.put(`http://localhost:8080/UpdateCategoryDetail`
            , {
                editCateId: editCateId,
                editCateName: editCateName,
                editCateImg: editCateImg,
                editCateIsActive: editCateIsActive
            }
        )
        .then(() => {window.location.href = "/categoryManage"})
    }

    useEffect(() => {
        dispatch.Category.fetchcategorydetail({ CateId: params.CateId })
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
                            <input value={editCateId} disabled onChange={(event) => { dispatch.Category.editCateId({ editCateId: event.target.value }) }} />
                        </div>
                    </div>
                    <div className="ProductInfo">
                        <div className="ProductTitle">
                            <p>ชื่อสินค้า</p>
                        </div>
                        <div className="ProductData">
                            <input value={editCateName} onChange={(event) => { dispatch.Category.editCateName({ editCateName: event.target.value }) }} />
                        </div>
                    </div>
                    <div className="ProductInfo">
                        <div className="ProductTitle">
                            <p>ชื่อสินค้า</p>
                        </div>
                        <div className="ProductData">
                            <input value={editCateImg} onChange={(event) => { dispatch.Category.editCateImg({ editCateImg: event.target.value }) }} />
                        </div>
                    </div>
                    <div className="ProductInfo">
                        <div className="ProductTitle">
                            <p>ชื่อสินค้า</p>
                        </div>
                        <div className="ProductData">
                            <select onChange={(event) => { dispatch.Category.editCateIsActive({ editIsActive: event.target.value }) }}>
                                {
                                    editCateIsActive ? (
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
                        <button className="submitButton" onClick={updateCategoryDetail}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditCategoryDetail