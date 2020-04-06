 // function sayHello(name) {
  //console.log('Hello' + name);}
   //sayHello('Archit'); 
//console.log(module); 


// there is no windows object in node
//var log = require('./logger');

 // log('message');

 const os = require ('os');

 var totalMemory= os.totalmem();
 var freeMemory = os.freemem();

 console.log(`total memory : ${totalMemory}`) ;
 console.log(`free memory : ${freeMemory}`) ;