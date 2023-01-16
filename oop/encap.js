let a = 3;
let b = 7;
let c = 90;



function sum(x, y, z) {
    return x + y + z;
}

console.log(sum(a, b, c));



// Encap 
class data {

    a = 3;
    b = 7;
    c = 90;

    static sum() {
        return this.a + this.b + this.c;
    }
}

console.log(data.sum());
