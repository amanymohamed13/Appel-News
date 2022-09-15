
//All requires needed 
const { request, response } = require('express')
const express = require('express')
const app = express()
const req=require('request')
const path=require('path')
const port = 3000
const hbs=require('hbs')


const url="https://newsapi.org/v2/everything?q=Apple&from=2022-09-12&sortBy=popularity&apiKey=eb1c2a7104dc48218e21b1e3d16ae5f7"
const apk="eb1c2a7104dc48218e21b1e3d16ae5f7"

///////////////////////////////////////////////////////////////////////
// deal with hbs get current path//////////////////////////////////////

app.use(express.static(path.join(__dirname,'./views')))

const pathV=path.join(__dirname,'views')

app.set("view engine","hbs")

app.set("views",pathV)

req(
    {
        //short hand-----------------------
        url,
        json:true,
        // to show news in web page
        headers:{"User-Agent":'request'}
    },
    (error,response)=>{

        if(error)
        {
            return console.log("error occured")

        }

        
app.get("/",(req,res)=>{
 // index->hbs file in views folder   
res.render("index",{
    //get access to aricels by response.body
    new:response.body.articles
      
})
    })
})


app.listen(port,()=>{
    console.log("Done Sucssefully")
})