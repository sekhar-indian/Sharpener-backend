const http=require('http');

// function rqListener(req, res){
//   console.log(req)
// }

// http.createServer(rqListener);



const sever=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers)
    // process.exit();
    res.setHeader("Content-Type","text/html");
    res.write("<html>")
    res.write("<h1>Welcome home</h1> ");
    res.write("<h1>Welcome to About Us page</h1> ");
    res.write("<h1>Welcome to my Node Js project</h1> ");
    res.write("</html>");
    res.end();
});

sever.listen(3000);