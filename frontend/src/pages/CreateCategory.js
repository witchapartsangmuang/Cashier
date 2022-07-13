import axios from 'axios'
import { useState } from "react"
import Header from "../components/Header"

function CreateCategory() {

    const [cateName, setcateName] = useState()
    const [cateFile, setcateFile] = useState()
    const createNewCategory = () => {
        let formData = new FormData()
        formData.append("cateName", 1)
        formData.append("cateFile", 2)
        console.log(formData)
        // const data = {
        //     "cateName":cateName
        //     ,
        //     "cateFile":cateFile[0]
        // }
        // axios.post("http://localhost:8080/CreateCategory", data
        // , {
        //     headers: {
        //       "Content-Type": "multipart/form-data"
        //     }
        //   }
        // ).then(res => console.log(res))
    }

    return (
        <div className="Page">
            <Header />
            <div className="content">
                <form>
                    <div className="ProductDetailDiv">
                        <div className="ProductInfo">
                            <div className="ProductTitle">
                                <p>รูปภาพหมวดหมู่</p>
                            </div>
                            <div className="ProductData">
                                <input type="file" onChange={(event) => { setcateFile(event.target.files) }} />
                            </div>
                        </div>
                        <div className="ProductInfo">
                            <div className="ProductTitle">
                                <p>ชื่อหมวดหมู่</p>
                            </div>
                            <div className="ProductData">
                                <input type="text" onChange={(event) => { setcateName(event.target.value) }} />
                            </div>
                        </div>
                        <div className='buttonDiv'>
                            <button type="submit" className='submitButton' onClick={createNewCategory}>CreateNewCategory</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CreateCategory