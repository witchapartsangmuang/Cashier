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
            <div style={{display:"flex",width:"100%",height:"40px",justifyContent:"right",alignItems:"center"}}>
                <div style={{width:"70px",textAlign:"center"}}>
                    <button style={{width:"50px",height:"30px"}} onClick={newCategory}>+</button>
                </div>
            </div>
            <CategoryTable />
        </div>
    )
}
export default CategoryManage