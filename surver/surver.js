const http=require('http');

// function rqListener(req, res){
//   console.log(req)
// }

// http.createServer(rqListener);



const sever=http.createServer((req,res)=>{
    console.log(req)
    console.log("jdkj")
});

sever.listen(3000);