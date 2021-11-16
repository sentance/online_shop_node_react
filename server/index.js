require('dotenv').config()

const express = require('express')
const app = express()
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routs/index')
const port = process.env.PORT || 3000
const errorHandler = require('./midleware/errorHandlingMiddleware')
const path = require('path')


app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

//Errors handlers - last middleware
app.use(errorHandler)

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

