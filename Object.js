
const obj ={
   name:"Ajay kumar verma ",
   mob:"9876543210",
   addr:"Patna"  
}

console.log(obj.name);
console.log(obj['mob'])

//  for adding 
obj.req=true;

// for Deleting 
obj.name=undefined
delete obj.mob

console.log(obj.name);
console.log(obj['mob'])
console.log(obj['req']);



// Object.keys() , Object.values(), Object.entries()


