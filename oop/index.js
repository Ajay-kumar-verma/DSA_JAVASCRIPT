// console.log("Code is running ...!")



// class Circle {
//     constructor(radius) {
        
//         console.log("this", this); 
//         this.radius = radius;
//         this.draw = function () {
//             console.log("draw");
//         };
//         console.log("this", this);

//     }
// }

// // it create new obj with empty data then field 
// new  Circle(3);
// new  Circle(5);

// // constructor is  default function in class that execute when we create object 
// // in js everything is a object 


// let obj = {value:10};

// function increase(obj){
//     obj.value++;
// }

// increase(obj);
// console.log(obj);

// // primitive data get copied by their value where as obj get copied by their references  


// const objs = {
//     'p no ':"232323"
// }

// objs['ajay name '] = "Ajajha "
// objs.add = "Patna"

// console.log(objs);

// for(let key in objs)
//     console.log(key,objs[key]);
 

// for(let val of [3,4,12,3,2,11,3])
//     console.log(val);

// for(let key in {name:"Ajay",add:"Patna",mob:997354})
//     console.log(key);

//     console.log("______________________");



// if("name" in {name:"Ajay",add:"Patna",mob:997354})
//     console.log("true");
    
// if(3 in [3,4,12,3,2,11,3])
//     console.log('val');


function x(){
      
    let name= "aaa";   // this is consider as private 

 this.getName=()=>{
    return name;
}
 // this is consider as public 
}

const obj = new x();
console.log(obj.getName());

console.log(new Error("Object alrrady created ")); 

