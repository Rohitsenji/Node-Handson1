const http = require("http")
const jsondata = require('./Package')

const server = http.createServer((req,res)=>{

    if(req.url==='/'){
        res.write("<h1>Hello, Welcome Home</h1>")
        res.end()
    }
    else if(req.url === '/product'){
        const jsonstore = JSON.stringify(jsondata);
        res.write(jsonstore)
        // res.write("<h1>Products Section</h1>")
        res.end()
    }
    else if(req.url === '/contact'){
        res.write("<h1>Contact us on instagram roony_rohit</h1>")
        res.end()
    }
    else{
        res.write('Error 404')
    }
})

server.listen(702,()=>{
    console.log('Server Started')
})