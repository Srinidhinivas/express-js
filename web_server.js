const express = require('express')
const app = express()
const path = require('path')
const port =process.env.PORT || 3000;
const cors = require('cors')  // using third party midleware
const errorhandler = require('./middleware/errorHandler') // local or user defined middle ware


app.use((req,res,next) => {   // using in build middleware

    console.log(`the path of request is ${req.path}
    the method of the request is ${req.method}`)
                  next()
})

app.use(cors())

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(path.join(__dirname,'./public')))
app.use('/subdir',express.static(path.join(__dirname,'./public'))) // we here provide the static css content
// to subdir content also . in the above line it provide sthe static content only to the root page .

app.use('/employees', require('./routes/api/employees.js'))


app.use('/subdir', require('./routes/subdir'))
app.use('/',require('./routes/root'))


app.all('/*',(req,res) =>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
  }) // here we use app.all because what ever the http method may be (get, post,json,text)
      // the output will display the 404.html page


app.use(errorhandler)
app.listen(port, () => console.log(`Server running on port ${port}`));