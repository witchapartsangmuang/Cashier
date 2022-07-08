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
            }
        })
    } else {
        client.query(`SELECT * from "Product" WHERE "CateId" = ${req.query.cateId}`, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result.rows)
            }
        })
    }
})

app.get(`/GetCart/`,(req,res) => {
    client.query(`SELECT * FROM "Product" INNER JOIN "Cart" ON "Product"."ProdBarcode" = "Cart"."ProdBarcode"`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result.rows)
            console.log("GetCart")
        }
    })
})

app.post(`/AddToCart/`,(req,res) => {
    client.query(`INSERT INTO "Cart" ("Quantity", "Total", "ProdBarcode") VALUES (1, 1, '${req.body.ProdBarcode}')`, (err, result) => {
        if (err) {
            console.log(err,"err")
        } else {
            console.log("AddToCart Successfully")
        }
    })
})

// app.put(`/AddToCart/`,(req,res) => {
//     client.query(`INSERT INTO "Cart" ("Quantity", "total", "ProdId") VALUES (1, 1, ${req.body.ProdId})`, (err, result) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log('suc')s
//         }
//     })
// })
app.listen(8080)