var array = [10,2,3];
forLoop(array);
 forLoop(array){
   for(let i=0; i<array.length;i++){
     "I am ${i} strange loop${i === 0 ? '' : 's'}."
   }
 }
