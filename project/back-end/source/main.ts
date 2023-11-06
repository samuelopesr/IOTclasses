// import { log } from "console"
// import { text } from "stream/consumers"

import { log } from "console";
import { text } from "stream/consumers";

// const myArray: Array<string> = [ "samu", "nir", "zé" ]
// console.log(myArray)

// let value: number = 10
// let texto: string = "NICE"

// const constante: string = "é um valor imutável"

// if (value > 5)
// {
//     console.log("its true", value);
    
// }

// console.log(value, texto);
// console.log(`isto \n é uma \n variável:  ${value}`);



// for (const iterator of myArray) {
//     console.log(iterator);
// }

// myArray.forEach(element => {
//     console.log(element + "1");
    
// })

// function mais(numero: number, numero1: number )
// {
//     return numero + numero1
// }

// console.log(mais(10, 10));

// const variavel = (metodo: number) => {
//     console.log(metodo + 12);  
// }

// function writeSomething(opa:string)
// {
//     console.log(opa);
    
// }

// function ExemploCallBack(callback: (text: string) => void)
// {
//     callback("sla")  
// }

// ExemploCallBack(writeSomething)

function calc(a1: number, b1: number, funcaoCalculadore: (a2: number, b2: number) => number, print: (text: string) => string)
{
    const result = funcaoCalculadore(a1,b1)
    console.log(result);

    const myText = print(`esse foi o resultado ${result}`)
    console.log(myText);
    
}


calc(50,20, (a: number, b: number) => {
    return a % b
}, (my: string) => {
    return my
})


const arr: Array<number> = [12, 14, 90, 50]
const arr2: Array<string> = ["samu", "epa", "opa", "nice"]
console.log(arr);
console.log(arr2);

arr.forEach((el, pos) => {
    console.log(el, pos);
})


const newList = arr.map((valor, pos) => {
    return `Novo valor ${valor + pos} \n`
})

console.log(newList);

const withFilter = arr.filter((valor, pos) => {
    return valor < 40
})

console.log(withFilter);


