var arr = [];
forLoop(arr);
whileLoop(10);
//doWhileLoop(arr);

function forLoop(array){
   for(let i=0; i<25;i++){
     if(i==0){
       array[i] = "I am " + i +" strange loop."
     }else{
        array[i] = "I am " + i +" strange loops."
     }
   }
   console.log(array);
   return array;
 }

function whileLoop(n){
  while(n>0){
    console.log(n);
    n--;
  }
 return 'done';
}

function doWhileLoop(array){
  do{
    array.pop();
  }while(!array.isEmpty());
}
