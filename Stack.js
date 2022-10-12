class Stack {

    constructor() {
        this.item = []
    }

    push(ele) {
        this.item.push(ele)
    }

    pop() {
        return this.item.pop();
    }

    size() {
        return this.item.size.length;
    }

    print() {
        console.log(this.item.toString())
    }

    isEmpty() {
        return this.item.length === 0;
    }

}

const stk=new Stack();
stk.push("Ajay kumar ")
stk.pop()
stk.print();