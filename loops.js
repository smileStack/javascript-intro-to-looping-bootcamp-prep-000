var arr = [];
forLoop(arr);
function forLoop(array){
  console.log(array.length);
   for(let i=0; i=<25;i++){
     array[i] = "I am ${i} strange loop${i === 0 ? '' : 's'}."
   }
 }
s