import Header from "../components/Header"
import ProductTable from "../components/ProductTable"
function ProductManage () {

    const newProduct = () => {
        window.location.href = "productManage/createProduct"
    }

    return (
        <div className="Page">
            <Header />
            <div style={{display:"flex"}}>
                <div style={{width:"50%"}}></div>
                <div style={{width:"50%"}}>
                    <button style={{width:"50px"}} onClick={newProduct}>+</button>
                </div>
            </div>
            <ProductTable/>
        </div>
    )
}
export default ProductManage