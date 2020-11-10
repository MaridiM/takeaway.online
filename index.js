const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const productRoutes = require('./routes/product')
const productsRoutes = require('./routes/products')
const ordersRoutes = require('./routes/orders')
const categoriesRoutes = require('./routes/categories')
const usersRoutes = require('./routes/users')


const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Request-Methods", "GET, POST, OPTIONS, UPDATE");
  next();
})

app.use('/products/', productsRoutes)
app.use('/product/', productRoutes)
app.use('/orders/', ordersRoutes)
app.use('/categories/', categoriesRoutes)
app.use('/users/', usersRoutes)

app.listen(8080, () => console.log('Server is listening on port 8080'))