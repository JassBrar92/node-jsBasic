const memoryObject=require('os');
const totalMemory=memoryObject.totalmem();
const freeMemmory=memoryObject.freemem();
console.log(totalMemory);
console.log(freeMemmory);