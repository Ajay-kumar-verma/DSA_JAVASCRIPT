

console.log(1+"2"+"2");

//  +""  ,  -""  is used for converting String into number 

console.log(1+ +"2" + -"2");

console.log(1+20+ ""+30);

// ""+number is used for into a string 

const obj={
   a:"123",
   b:"329" 
}

const a={a:"111",b:"0999"}
const b={c:"09df"}
// a and b gets converted into String and get same result 

obj[a]=11;
obj[b]=22;



console.log(obj[a]);



console.log("Type of ");
console.log(typeof 3,typeof "3");
console.log(typeof (""+3));
console.log(typeof (+"3"));

console.log("A"- "B" + "2");


// if we perform any mathematical operation with nan will result nan
console.error("A"-"B"+3)


console.log("+++++++++++++++++++++ FUNCTION ");

var x=20;

function f(){
 x=345;
 return 
 var x={}
//  if function has local variable it wont acces to lexical variable or global variable
//   if variable not there in local then it acces to global variable 
}

f()
console.log(x);
