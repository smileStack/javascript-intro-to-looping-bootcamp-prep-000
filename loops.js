var arr = [];
forLoop(arr);
function forLoop(array){
   for(let i=0; i<25;i++){
     array[i] = "I am " + i +" strange loop"+ if(i>0){return 's'} + "."
   }
   console.log(array);
   return array;
 }
