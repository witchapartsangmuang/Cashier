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
        <div className="Page">
            <Header />
            <input id="InputBarcode" type="text" onKeyDown={onKeyDown} />
            <table className="CartTable">
                <thead>
                    <tr className="DataHead">
                        <th className="Index">ลำดับ</th>
                        <th className="ProdName">ชื่อสินค้า</th>
                        <th className="ProdDesc">คำอธิบายสินค้า</th>
                        <th className="ProdPrice">ราคาต่อชิ้น</th>
                        <th className="Quantity">จำนวนชิ้น</th>
                        <th className="total">ราคารวม</th>
                        <th className="Delete">ลบ</th>
                    </tr>
                </thead>
                <tbody>
                    {Cart.map((Prod, index) => {
                        return (
                            <tr className="DataRow" key={index + 1}>
                                <td className="Index">{index + 1}</td>
                                <td className="ProdName">{Prod.ProdName}</td>
                                <td className="ProdDesc">{Prod.ProdDesc}</td>
                                <td className="ProdPrice">{Prod.ProdPrice}</td>
                                <td className="Quantity">{Prod.Quantity}</td>
                                <td className="total">{Prod.Total}</td>
                                <td className="total"><button onClick={() => DeleteFromCart(Prod.ProdBarcode)}>ลบ</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
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