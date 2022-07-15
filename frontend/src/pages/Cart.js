import { useEffect, useState } from "react"
import Header from "../components/Header"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"

function Cart() {

    const dispatch = useDispatch()
    const Cart = useSelector((state) => state.Cart?.Cart)
    const Summary = useSelector((state) => state.Cart?.Summary)
    const [Change, setChange] = useState("*")

    const onKeyDown = (event) => {
        if (event.key === "Enter") {
            axios.post(`http://localhost:8080/AddToCart`, { ProdBarcode: event.target.value })
            event.target.value = ""
            window.location.reload()
            // dispatch.Cart.fetchCart()
        }
    }

    const DeleteFromCart = (ProdBarcode) => {
        axios.delete(`http://localhost:8080/DeleteFromCart/${ProdBarcode}`)
        window.location.reload()
        // dispatch.Cart.fetchCart()
    }

    const Calculate = (event) => {
        if (event.key === "Enter") {
            setChange(event.target.value - Summary)
        }
    }

    useEffect(() => {
        dispatch.Cart.fetchCart()
        document.getElementById('InputBarcode').focus()
    }, [])

    return (
        <div className="Page" style={{backgroundColor:"white"}}>
            <Header />
            <input id="InputBarcode" type="text" onKeyDown={(event) => onKeyDown(event)} />

            <div className="DataHead">
                <div className="Index">ลำดับ</div>
                <div className="ProdName">ชื่อสินค้า</div>
                <div className="ProdDesc">คำอธิบายสินค้า</div>
                <div className="ProdPrice">ราคาต่อชิ้น</div>
                <div className="Quantity">จำนวนชิ้น</div>
                <div className="total">ราคารวม</div>
                <div className="Delete">ลบ</div>
            </div>
            {Cart.map((Prod, index) => {
                return (
                    <div className="DataRow" key={index + 1}>
                        <div className="Index">{index + 1}</div>
                        <div className="ProdName">{Prod.ProdName}</div>
                        <div className="ProdDesc">{Prod.ProdDesc}</div>
                        <div className="ProdPrice">{Prod.ProdPrice}</div>
                        <div className="Quantity">{Prod.Quantity}</div>
                        <div className="total">{Prod.Total}</div>
                        <div className="Delete"><button onClick={() => DeleteFromCart(Prod.ProdBarcode)}>ลบ</button></div>
                    </div>
                )
            })}

            <div className="DivCalculateTable">
                <table className="CalculateTable">
                    <tbody>
                        <tr>
                            <td className="LeftCalculateTable">รับมา : </td>
                            <td className="RightCalculateTable"><input type="number" onKeyDown={Calculate} /> บาท</td>
                        </tr>
                        <tr>
                            <td className="LeftCalculateTable">ราคารวมทั้งหมด : </td>
                            <td className="RightCalculateTable">{Summary} บาท</td>
                        </tr>
                        <tr>
                            <td className="LeftCalculateTable">ทอน : </td>
                            <td className="RightCalculateTable">{Change} บาท</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Cart