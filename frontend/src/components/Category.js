import {
    useDispatch
    // useSelector
} from "react-redux"
function Category() {
    const dispatch = useDispatch()
    const getproduct = (cateId) => {
        dispatch.Product.fetchproduct({ cateId: cateId })
    }
    return (
        <div className="Category">
            <div className="CategoryBox">
                <div className="CategoryItem" onClick={() => getproduct(1)}><img className="CategoryImage" alt="CategoryImg" src="image/หมวดเครื่องดื่ม.png" /></div>
            </div>
            <div className="CategoryBox">
                <div className="CategoryItem" onClick={() => getproduct(2)}><img className="CategoryImage" alt="CategoryImg" src="image/หมวดอาหาร.png" /></div>
            </div>
            <div className="CategoryBox">
                <div className="CategoryItem" onClick={() => getproduct(0)}><img className="CategoryImage" alt="CategoryImg" src="image/หมวดอาหาร.png" /></div>
            </div>
            <div className="CategoryBox">
                <div className="CategoryItem">CategoryItem</div>
            </div>
        </div>
    )
}
export default Category