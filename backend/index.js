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
    if (req.query.cateId == 0) {
        client.query(`SELECT * from "Product"`, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result.rows)
                console.log("GetProduct")
            }
        })
    } else {
        client.query(`SELECT * from "Product" WHERE "CateId" = ${req.query.cateId}`, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result.rows)
                console.log("GetProduct")
            }
        })
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

app.listen(8080)