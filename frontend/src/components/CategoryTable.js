import axios from 'axios'
import { useEffect, useState } from 'react'
import {
    useDispatch,
    useSelector
} from "react-redux"

function CategoryTable() {

    const dispatch = useDispatch()
    const Category = useSelector((state) => state.Category?.Category)

    useEffect(() => {
        dispatch.Category.fetchCategory()
    }, [])

    return (
        <div>
            <div className="CategoryTableHeader">
                <div className="CategoryTableColumnIndex">ลำดับ</div>
                <div className="CategoryTableColumnImg">รูปภาพ</div>
                <div className="CategoryTableColumnName">ชื่อหมวดหมู่</div>
                <div className="CategoryTableColumnAction">แอคชั่น</div>
            </div>
            {
                Category.map((cate, index) => {
                    return (
                        <div className='CategoryTableItem' key={index+1}>
                            <div className="CategoryTableColumnIndex">{index + 1}</div>
                            <div className="CategoryTableColumnImg"><img src={cate.CateImg} /></div>
                            <div className="CategoryTableColumnName">{cate.CateName}</div>
                            <div className="CategoryTableColumnAction">
                                <button className="ActionButton">ใช้งาน</button>
                                <button className="ActionButton">แก้ไข</button>
                                <button className="ActionButton">ลบ</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoryTable