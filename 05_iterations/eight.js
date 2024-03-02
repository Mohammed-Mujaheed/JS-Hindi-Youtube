const array1 = [1, 2, 3, 4]

//0+1+2+3+4
const initialValue = 0;
const sumWithInitial = array1.reduce(
(accumulator, currentvalue) => accumulator + currentvalue,
    initialValue,
);
// console.log(sumWithInitial);

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval

}, 0)

// console.log(myTotal);

// real world example
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) =>
 acc + item.price, 0)

console.log(priceToPay)







