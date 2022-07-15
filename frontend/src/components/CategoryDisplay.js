import {
    useEffect,
    // useState 
} from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    useDispatch,
    useSelector
} from "react-redux"

function CategoryDisplay() {

    const urlpath = useLocation()

    const dispatch = useDispatch()
    const Category = useSelector((state) => state.Category?.Category)

    const getproduct = (cateId) => {
        dispatch.Product.fetchproduct({ 
            cateId: cateId,
            IsActive: true,
            urlpath: urlpath.pathname
        })
    }

    useEffect(() => {
        dispatch.Category.fetchCategory({
            urlpath:urlpath.pathname
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
export default CategoryDisplay