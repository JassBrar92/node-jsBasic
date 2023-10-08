const http=require('http');
const server=http.createServer((req,res)=>{
  if(req.url==='/'){
    res.write('hello world');
    res.end();
  }
  else if(req.url==='/api/courses'){
    res.write(JSON.stringify(['Math','Science','Hindi']));
    res.end();
  }
});
server.listen(3000);
console.log('listenting on port 3000...');
  
