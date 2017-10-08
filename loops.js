var arr = [10,2,3];
forLoop(arr);
function forLoop(array){
  console.log(array,length);
   for(let i=0; i<array.length;i++){
     console.log("I am ${i} strange loop${i === 0 ? '' : 's'}.");
   }
 }
