console.log({}=={},{}==={});

const a={}
const b=a;
console.log(a===b);


console.log("______________________ HOISTING");

function c(){

  function foo(){ return 39;}  
 return foo();
 function foo(){ return 90;}
  
//  function gets override 

}

console.log(c());

console.log("++++++++++++++++++++++++++++++++++++++++++");
// boolean gets converted into either 0 or 1 

console.log(-true+- - -true);

console.log("++++++++++++++++++++++++++++++++++++ Array  ");


const arr=[1,2,21,3,5,42];

//  it gives aplphabetics sort 
console.dir(arr.sort((a,b)=>a-b));