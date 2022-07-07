import { useState } from "react"
import Header from "../components/Header"
import axios from "axios"
function Cart() {
    const [prodid, setprodid] = useState()

    const onChange = (event) => {
        setprodid(event.target.value)
    }

    const onKeyDown = (event) => {
        if (event.key === "Enter") {
            // axios.get("url")
        }
        // else {
        //     setprodid(event.target.value)
        // }
    }
    return (
        <div className="Page">
            <Header />
            Cart
            <input name="ProdId" type="text" onKeyDown={onKeyDown} onChange={onChange} />
            <table className="CartTable">
                <thead>
                    <tr className="DataHead">
                        <th className="Index">ลำดับ</th>
                        <th className="ProdName">ชื่อสินค้า</th>
                        <th className="ProdPrice">ราคาต่อชิ้น</th>
                        <th className="Quantity">จำนวนชิ้น</th>
                        <th className="total">ราคารวม</th>
                        <th className="Delete">ลบ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="DataRow">
                        <td className="Index">1</td>
                        <td className="ProdName">แก้วสีขาว</td>
                        <td className="ProdPrice">15</td>
                        <td className="Quantity">2</td>
                        <td className="total">30</td>
                        <td className="Delete">X</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
export default Cart