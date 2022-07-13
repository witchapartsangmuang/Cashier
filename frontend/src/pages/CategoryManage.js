import axios from 'axios'
import { useEffect, useState } from 'react'
import {
    useDispatch,
    useSelector
} from "react-redux"
import Header from "../components/Header"
import CategoryTable from '../components/CategoryTable'

function CategoryManage() {

    const newCategory = () => {
        window.location.href = "categoryManage/newCategory"
    }

    return (
        <div className="Page">
            <Header />
            <div style={{display:"flex"}}>
                <div style={{width:"50%"}}></div>
                <div style={{width:"50%"}}>
                    <button style={{width:"50px"}} onClick={newCategory}>+</button>
                </div>
            </div>
            <CategoryTable />
        </div>
    )
}
export default CategoryManage