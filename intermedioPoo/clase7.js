/* const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    }
};

const stringifiedComplexObj = JSON.stringify(obj1);
console.log(stringifiedComplexObj);
const obj2 = JSON.parse(stringifiedComplexObj);
console.log(obj2) */

// FUNCION RECURSIVA

const numbersArray = [2,1,52,623,64,2,326,646,3,23,13,4,1];

function recursiva(numbersArray){
    if (numbersArray.length != 0){
        const firstNum = numbersArray[0];
        console.log(firstNum);
        numbersArray.shift();
        return recursiva(numbersArray);
    }
}

