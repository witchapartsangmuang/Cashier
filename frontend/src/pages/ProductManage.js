import { useEffect, useState } from "react"
import {
    useDispatch,
    useSelector
} from "react-redux"
import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import ProductTable from "../components/ProductTable"

function ProductManage() {

    const urlpath = useLocation()
    const dispatch = useDispatch()
    const Category = useSelector((state) => state.Category?.Category)

    const [activefilter, setactivefilter] = useState("-")
    const [categoryfilter, setcategoryfilter] = useState("-")

    const newProduct = () => {
        window.location.href = "productManage/createProduct"
    }


    const filter = () => {
        dispatch.Product.fetchproduct({
            cateId: 0,
            IsActive: "true",
            urlpath: urlpath.pathname,
            activefilter: activefilter,
            categoryfilter: categoryfilter
        })
    }


    useEffect(() => {
        dispatch.Category.fetchCategory()
    }, [])

    useEffect(() => {
        filter()
    }, [activefilter, categoryfilter])

    return (
        <div className="Page">
            <Header />
            <div style={{ display: "flex" }}>
                <div style={{ width: "10%" }}>
                    การใช้งาน :
                    <select onChange={(event) => { setactivefilter(event.target.value) }}>
                        <option value="-">ทั้งหมด</option>
                        <option value="true">ใช้งาน</option>
                        <option value="false">ไม่ใช้งาน</option>
                    </select>
                </div>
                <div style={{ width: "10%" }}>
                    หมวดหมู่ :
                    <select onChange={(event) => { setcategoryfilter(event.target.value) }}>
                        <option value="-">ทั้งหมด</option>
                        {
                            Category.map((cate, index) => {
                                return (
                                    <option value={cate.CateId} key={index + 1}>{cate.CateName}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div style={{ width: "50%" }}>
                    <button style={{ width: "50px" }} onClick={newProduct}>+</button>
                </div>
            </div>
            <ProductTable />
        </div>
    )
}
export default ProductManage