import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/api', (req, res) => {
    res.json({"names":["Daniel","Theodore","Jackson"]})
})

app.listen(PORT, () => {
    console.log(`Server running on localhost: ${PORT}`)
})
