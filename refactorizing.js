// 1. Replace Temp with Query

class Order {
    constructor(price, quantity) {
        this.price = price;
        this.quantity = quantity;
    }

    getTotal() {
        return this.price * this.quantity;
    }
}

function printOrder(order) {
    console.log("Total:", order.getTotal());
}



// 2. Split Temporary Variable

function calculate(input) {
    let double = input * 2;
    let result = double + 10;
    return result;
}



// 3. Remove Assignments to Parameters




// 4. Replace Method with Method Object

class PriceCalculator {
    constructor(price, tax) {
        this.price = price;
        this.tax = tax;
    }

    calculate() {
        return this.base() + this.taxAmount();
    }

    base() {
        return this.price;
    }

    taxAmount() {
        return this.price * this.tax;
    }
}

function reduceArray(array){
    return array.reduce((acc, actual) =>{
        return acc + actual;
    },0);
}





// Example usage

const order = new Order(10, 5);
printOrder(order);

console.log(calculate(5));
console.log(applyDiscount(100));

const calculator = new PriceCalculator(100, 0.19);
console.log(calculator.calculate());

