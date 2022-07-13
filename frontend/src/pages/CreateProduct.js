import axios from 'axios'
import { useEffect, useState } from "react"
import {
    useDispatch,
    useSelector
} from "react-redux"
import Header from '../components/Header'

function CreateProduct() {

    const dispatch = useDispatch()
    const Category = useSelector((state) => state.Category?.Category)

    const [ProdName, setProdName] = useState()
    const [ProdDesc, setProdDesc] = useState()
    const [ProdPrice, setProdPrice] = useState()
    const [ProdBarcode, setProdBarcode] = useState()
    const [ProdCateId, setProdCateId] = useState()

    const createNewProduct = () => {
        axios.post(`http://localhost:8080/CreateProduct`, {
            ProdName: ProdName,
            ProdDesc: ProdDesc,
            ProdPrice: ProdPrice,
            ProdBarcode: ProdBarcode,
            ProdCateId: ProdCateId,
        }).then(window.location.href = "/")
    }

    useEffect(() => {
        dispatch.Category.fetchCategory()
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
                            <input type="text" onChange={(event) => { setProdName(event.target.value) }} />
                        </div>
                    </div>
                    <div className="ProductInfo">
                        <div className="ProductTitle">
                            <p>คำอธิบายสินค้า</p>
                        </div>
                        <div className="ProductData">
                            <input type="text" onChange={(event) => { setProdDesc(event.target.value) }} />
                        </div>
                    </div>
                    <div className="ProductInfo">
                        <div className="ProductTitle">
                            <p>ราคาสินค้าต่อชิ้น</p>
                        </div>
                        <div className="ProductData">
                            <input type="text" onChange={(event) => { setProdPrice(event.target.value) }} />
                        </div>
                    </div>
                    <div className="ProductInfo">
                        <div className="ProductTitle">
                            <p>รหัสบาร์โค้ต</p>
                        </div>
                        <div className="ProductData">
                            <input type="text" onChange={(event) => { setProdBarcode(event.target.value) }} />
                        </div>
                    </div>
                    <div className="ProductInfo">
                        <div className="ProductTitle">
                            <p>ชื่อสินค้า</p>
                        </div>
                        <div className="ProductData">
                            <select onChange={(event) => { setProdCateId(event.target.value) }}>
                                <option value="">-</option>
                                {
                                    Category.map((cate, index) => {
                                        return (
                                            <option value={cate.CateId} key={index+1}>{cate.CateName}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className='buttonDiv'>
                        <button className='submitButton' onClick={createNewProduct}>CreateNewProduct</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateProduct