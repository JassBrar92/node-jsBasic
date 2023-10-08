let url="http/userlogin/profile";
function log(message){
      console.log(message);
}
//module.exports=log;   //exporting  log function only
module.exports.logger=log;  //exporting object logger which has only log mehtod
