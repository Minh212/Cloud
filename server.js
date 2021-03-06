const http = require('http')
const hostname = 'localhost'
const port = 3000;

const server = http.createServer((req, res)=>{
    res.setHeader("Content-Type", "text/html");
    switch(req.url){
        case '/home':
        case '/':
            res.end('<h1>HOME</h1>');
            break;
        case '/about':
            res.end('<h1>About page</h1>');
            break;
        default:
            res.end('<h1 style="color:red"> File not found!!</h1>');
            break;
    }

})

server.listen(port,hostname, ()=>{
    console.log('Server is running on Port' + port);
})