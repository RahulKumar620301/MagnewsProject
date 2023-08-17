const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')



const app = express()
const port = 3000


app.use(cors({origin: '*'}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public', express.static(path.join(__dirname, 'public')))



const contactApi = require('./routes/contactApi')
app.use('/contact',contactApi) //contacApi is called by contact name

const userApi = require('./routes/userApi')
app.use('/user',userApi)

const articleApi = require('./routes/articleApi')
app.use('/article',articleApi)

const adminApi = require('./routes/adminApi')
app.use('/admin',adminApi)

const categoryApi = require('./routes/categoryApi')
app.use('/category',categoryApi)

app.get('/', (req, res) => {
  res.send('welcome to my magazine')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})