var arr = [];
var arr2 = [2,3,5];
forLoop(arr);
whileLoop(10);
doWhileLoop(arr2);

function forLoop(array){
var length =array.length;
   for(let i=length; i<(25+length);i++){
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
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array){
console.log(array);
  do{
    console.log(array.length);
    if(array.length==0){
      return array;
    }


    array.pop();

    console.log(array);

}while(array.length>0 || maybeTrue()==true);
}
