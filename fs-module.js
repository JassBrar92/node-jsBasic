const fs=require('fs');
//const files=fs.readdirSync('./');   // synchronized method
//console.log(files);


const files=fs.readdir('./',function(err,file){
  if(err)  console.log(err);
  else      console.log(file);
})