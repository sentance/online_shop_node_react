require('dotenv').config()

const express = require('express')
const app = express()
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routs/index')
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async() =>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
        })
    }catch(e){
        console.log(e)
    }
}
start()

app.get('/', (req, res)=>{
    res.send('<h1>Hello</h1>')
})

