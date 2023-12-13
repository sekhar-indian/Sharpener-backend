const http=require('http');
const fs=require('fs');

// function rqListener(req, res){
//   console.log(req)
// }

// http.createServer(rqListener);



const sever=http.createServer((req,res)=>{
    // console.log(req.url,req.method,req.headers)
    // process.exit();
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        res.write("<html>")
        res.write("<h1>Enter msms</h1> ");
        res.write('<body><form action="/message" method="POST"> <input type="text"><button type="submit">send </button></form></body> ');
        res.write("</html>");
        return res.end();
    }
    if(url==="/message"&& method==="POST"){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk)
        });
        req.on('end',()=>{
            const paesedBody=Buffer.concat(body).toString();
            console.log(paesedBody)
            const message=paesedBody.split('=')[1];
            fs.writeFileSync('masage.text',message);
            
        });
       
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end()
    }

    res.setHeader("Content-Type","text/html");
    res.write("<html>")
    res.write("<h1>Welcome home</h1> ");
    res.write("<h1>Welcome to About Us page</h1> ");
    res.write("<h1>Welcome to my Node Js project</h1> ");
    res.write("</html>");
    res.end();
});

sever.listen(3000);



