const express = require('express')
const { Client } = require('pg')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Cashier',
    password: '123456',
    port: 5432,
})
client.connect()

app.get(`/GetProduct/`, (req, res) => {
    if (req.query.urlpath == "/") {
        if (req.query.cateId == 0) {
            client.query(`SELECT * from "Product" INNER JOIN "Category" ON "Product"."CateId" = "Category"."CateId" WHERE "Product"."IsActive" = true ORDER BY "Product"."ProdId"`, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    res.send(result.rows)
                    console.log("GetProduct")
                }
            })
        } else {
            client.query(`SELECT * from "Product" INNER JOIN "Category" ON "Product"."CateId" = "Category"."CateId" WHERE "Product"."CateId" = ${req.query.cateId} AND "Product"."IsActive" = true ORDER BY "Product"."ProdId"`, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    res.send(result.rows)
                    console.log("GetProduct")
                }
            })
        }
    } else if (req.query.urlpath == "/productManage") {
        if (req.query.activefilter != "-" && req.query.categoryfilter != "-") {
            client.query(`SELECT * from "Product" INNER JOIN "Category" ON "Product"."CateId" = "Category"."CateId" WHERE "Product"."IsActive" = '${req.query.activefilter}' AND "Product"."CateId" = ${req.query.categoryfilter}`, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    res.send(result.rows)
                    console.log("GetProduct")
                }
            })
        }
        else if (req.query.activefilter != "-" && req.query.categoryfilter == "-") {
            client.query(`SELECT * from "Product" INNER JOIN "Category" ON "Product"."CateId" = "Category"."CateId" WHERE "Product"."IsActive" = '${req.query.activefilter}'`, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    res.send(result.rows)
                    console.log("GetProduct")
                }
            })
        }
        else if (req.query.activefilter == "-" && req.query.categoryfilter != "-") {
            client.query(`SELECT * from "Product" INNER JOIN "Category" ON "Product"."CateId" = "Category"."CateId" WHERE "Product"."CateId" = ${req.query.categoryfilter}`, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    res.send(result.rows)
                    console.log("GetProduct")
                }
            })
        }
        else {
            client.query(`SELECT * from "Product" INNER JOIN "Category" ON "Product"."CateId" = "Category"."CateId"`, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    res.send(result.rows)
                    console.log("GetProduct")
                }
            })
        }
    }
})

app.get(`/GetCart/`, (req, res) => {
    client.query(`SELECT * FROM "Product" INNER JOIN "Cart" ON "Product"."ProdBarcode" = "Cart"."ProdBarcode" ORDER BY "Cart"."CartId"`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result.rows)
            console.log("GetCart")
        }
    })
})

app.post(`/AddToCart/`, (req, res) => {
    client.query(`SELECT * FROM "Product" INNER JOIN "Cart" ON "Product"."ProdBarcode" = "Cart"."ProdBarcode" WHERE "Cart"."ProdBarcode" = '${req.body.ProdBarcode}'`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            if (result.rows.length == 0) {
                client.query(`INSERT INTO "Cart" ("Quantity", "ProdBarcode") VALUES (1, '${req.body.ProdBarcode}')`, (err, result) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("AddToCart Successfully")
                    }
                })
            }
            else {
                console.log('result have already in cart')
                client.query(`UPDATE "Cart" SET "Quantity" = "Quantity" + 1  WHERE "ProdBarcode" = '${req.body.ProdBarcode}' `, (err, result) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("Update AddToCart Successfully")
                    }
                })
            }
            client.query(`UPDATE "Cart" SET "Total" = "Cart"."Quantity" * "Product"."ProdPrice" FROM "Product" WHERE "Cart"."ProdBarcode" = "Product"."ProdBarcode"`)
        }
    })
})

app.delete(`/DeleteFromCart/:ProdBarcode`, (req, res) => {
    client.query(`DELETE FROM "Cart" WHERE "ProdBarcode" = '${req.params.ProdBarcode}'`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log('DeleteFromCart Successfully')
        }
    })
})

app.get(`/GetCategory/`,(req,res) =>{
    client.query(`SELECT * FROM "Category"`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result.rows)
            console.log("GetCategory")
        }
    })
})

app.get(`/GetCategoryDetail/`,(req,res) =>{
    client.query(`SELECT * FROM "Category" WHERE "CateId" = ${req.query.CateId}`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result.rows)
            console.log("GetCategoryDetail")
        }
    })
})


app.get(`/GetProductDetail/`,(req,res) =>{
    client.query(`SELECT * FROM "Product" INNER JOIN "Category" ON "Product"."CateId" = "Category"."CateId" WHERE "Product"."ProdId" = '${req.query.ProdId}'`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result.rows)
            console.log("GetProductDetail")
        }
    })
})

app.put(`/UpdateCategoryDetail/`,(req,res) =>{
    console.log(req.body)
    client.query(`UPDATE "Category" SET
    "CateName" = '${req.body.editCateName}',
    "CateImg" = '${req.body.editCateImg}',
    "IsActive" = ${req.body.editCateIsActive}
    WHERE "CateId" = ${req.body.editCateId}`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result.rows)
            console.log("UpdateCategoryDetail")
        }
    })
})

app.put(`/UpdateProductDetail/`,(req,res) =>{
    client.query(`UPDATE "Product" SET
    "ProdName" = '${req.body.editProdName}',
    "ProdDesc" = '${req.body.editProdDesc}',
    "ProdPrice" = ${req.body.editProdPrice},
    "ProdBarcode" = '${req.body.editProdBarcode}',
    "CateId" = ${req.body.editCateId},
    "IsActive" = ${req.body.editIsActive}
    WHERE "ProdId" = ${req.body.editProdId}`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result.rows)
            console.log("UpdateProductDetail")
        }
    })
})

app.post(`/CreateProduct/`, (req, res) => {
    client.query(`INSERT INTO "Product"
    ("ProdName","ProdDesc","ProdPrice","ProdBarcode","CateId")
    VALUES ('${req.body.ProdName}', '${req.body.ProdDesc}', ${req.body.ProdPrice}, '${req.body.ProdBarcode}', ${req.body.ProdCateId})`,(err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log("CreateProduct")
        }
    })
})

// unsuccess
app.post(`/CreateCategory/`, (req, res) => {
    console.log(req)
})

app.listen(8080)