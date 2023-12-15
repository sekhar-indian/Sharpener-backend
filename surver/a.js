// const http=require('http');
// function l(req,res){
//   res.setHeader('Content-type','text/html');
//   res.write('<html> <h1>hi</h1></html>');
//   res.end();
// }
// http.createServer(l).listen(3000);


const http=require('http');

function s(req,res){

    const path=req.url;

    if(path=='/home'){
        res.write('<html><h1>Welcome to home</h1></html>');
    }else if(path=='about'){
        res.write('<html><h1>Welcome to About Us page</h1></html>');
    }else if(path=='/url'){
        res.write('<html><h1>Welcome to my Node Js project </h1></html>');
    }
    res.end();
}

http.createServer(s).listen(3000);