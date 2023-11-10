const http = require("http")
const jsondata = require('./Package')

const server = http.createServer((req,res)=>{

    if(req.url==='/'){
        res.write("<title>Home page of Handson-1</title><h1>Hello, Welcome Home</h1>")
        res.write("<h1>What is Node?</h1>")
        res.write("<p>Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 JavaScript engine. It allows developers to execute JavaScript code outside of a web browser, enabling server-side development. Node.js is event-driven and non-blocking, making it efficient for handling concurrent operations. It has a large ecosystem of libraries and frameworks, making it popular for building scalable and high-performance web applications, APIs, and server-side applications.</p>")
        res.write("<h1>Beneifits Of Node</h1>")
        res.write("<ol><li>JavaScript Everywhere</li><li>Fast Execution</li><li>Asynchronous and Non-blocking</li></ol>")
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