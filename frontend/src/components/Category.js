import axios from 'axios'
import { useEffect, useState } from 'react'
import {
    useDispatch
    // useSelector
} from "react-redux"
function Category() {
    const dispatch = useDispatch()

    const [Category, setCategory] = useState([])

    const getproduct = (cateId) => {
        dispatch.Product.fetchproduct({ cateId: cateId })
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/GetCategory`)
            .then((response) => {
                setCategory(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div className="Category">
            <div className="CategoryBox">
                <div className="CategoryItem" onClick={() => getproduct(0)}><img className="CategoryImage" alt="CategoryImg" src="image/หมวดเครื่องดื่ม.png" /></div>
            </div>
            {
                Category.map((cate, index) => {
                    let CateId = cate.CateId
                    console.log(CateId)
                    return (
                        <div className="CategoryBox" key={index}>
                            <div className="CategoryItem" onClick={() => getproduct(CateId)}><img className="CategoryImage" alt="CategoryImg" src="image/หมวดเครื่องดื่ม.png" /></div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Category