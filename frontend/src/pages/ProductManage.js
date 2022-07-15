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
    const [categoryfilter, setcategoryfilter] = useState(0)

    const newProduct = () => {
        window.location.href = "productManage/createProduct"
    }


    const filter = () => {
        dispatch.Product.fetchproduct({
            cateId: categoryfilter,
            urlpath: urlpath.pathname,
            activefilter: activefilter,
        })
    }


    useEffect(() => {
        dispatch.Category.fetchCategory({ urlpath: urlpath.pathname })
    }, [])

    useEffect(() => {
        filter()
    }, [activefilter, categoryfilter])

    return (
        <div className="Page">
            <Header />
            <div style={{ display: "flex", width: "100%", height: "40px", alignItems: "center" }}>
                <div style={{ width: "50%", display: "flex" }} >
                    <div style={{ width: "200px", display: "flex" }}>
                        <p style={{ margin: "0", paddingTop: "4px" }}>การใช้งาน : </p>
                        <select style={{ height: "30px", width: "100px" }} onChange={(event) => { setactivefilter(event.target.value) }}>
                            <option value="-">ทั้งหมด</option>
                            <option value="true">ใช้งาน</option>
                            <option value="false">ไม่ใช้งาน</option>
                        </select>
                    </div>
                    <div style={{ width: "200px", display: "flex" }}>
                        <p style={{ margin: "0", paddingTop: "4px" }}>หมวดหมู่ : </p>
                        <select style={{ height: "30px", width: "100px" }} onChange={(event) => { setcategoryfilter(event.target.value) }}>
                            <option value="0">ทั้งหมด</option>
                            {
                                Category.map((cate, index) => {
                                    return (
                                        <option value={cate.CateId} key={index + 1}>{cate.CateName}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div style={{ width: "50%", display: "flex",justifyContent:"right" }} >
                    <div style={{ width: "70px", textAlign: "center" }}>
                        <button style={{ width: "50px", height: "30px" }} onClick={newProduct}>+</button>
                    </div>
                </div>
            </div>
            <ProductTable />
        </div>
    )
}
export default ProductManage