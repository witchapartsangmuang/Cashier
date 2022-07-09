import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <div className="NameBox">
                <a href="/">
                    {/* <Link to="/"> */}
                    <p>Header</p>
                    {/* </Link> */}
                </a>
            </div>
            <div className="CartBox">
                <a href="/cart">
                    {/* <Link to="/cart"> */}
                    <i className="bi bi-basket"></i>
                    {/* </Link> */}
                </a>
            </div>
        </div>
    )
}
export default Header