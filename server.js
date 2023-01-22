import express from 'express'
const app = express()
const port = 5000
import { sendeMail } from './controller/sendeMail.js'

app.get("/", (req, res) => {
 res.send("hii")
})
app.get("/send", sendeMail)



app.listen(port, () => {
    console.log(`server is listining on localhost${port}`)
})