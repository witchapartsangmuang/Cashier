import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {

    const urlpath = useLocation()

    const BannerDiv = () => {
        return (
            <div className="BannerDiv">
                <a href="/"><p>ร้านขายของ</p></a>
            </div>
        )
    }

    const SearchDiv = () => {
        if (urlpath.pathname === "/") {
            return (
                <div className="SearchDiv">
                    <input className="InputSearch" type="text" />
                </div>
            )
        }
        else {
            return (
                <div className="SearchDiv"></div>
            )
        }
    }

    const CartDiv = () => {
        return (
            <div className="CartDiv">
                <a href="/cart">
                    {/* <Link to="/cart"> */}
                    <i className="bi bi-basket"></i>
                    {/* </Link> */}
                </a>
            </div>
        )
    }

    const ManagementDiv = () => {
        return (
            <div className="ManagementDiv">
                <a href="/categoryManage">
                    <button style={{ width: "100%", height: "100%" }}>จัดการหมวดหมู่สินค้า</button>
                </a>
                <a href="/productManage">
                    <button style={{ width: "100%", height: "100%" }}>จัดการรายการสินค้า</button>
                </a>
                <a href="#">
                    <button style={{ width: "100%", height: "100%" }}>ประวัติการซื้อสินค้า</button>
                </a>
            </div>
        )
    }

    useEffect(() => {
        BannerDiv()
        SearchDiv()
        CartDiv()
    }, [])

    return (
        <div className="Header">
            <BannerDiv />
            <SearchDiv />
            <CartDiv />
            <ManagementDiv />
        </div>
    )
}
export default Header