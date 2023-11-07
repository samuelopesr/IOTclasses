

// const myArray: Array<string> = [ "samu", "nir", "zé" ]
// console.log(myArray)

import { callback } from "chart.js/dist/helpers/helpers.core";

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
    return valor + pos
})

console.log(newList);

const withFilter = arr.filter((valor, pos) => {
    return pos !== 2
})

console.log(withFilter);

const withReduce = arr.reduce((pv, cv, pos) => {
    return pos
})

console.log("with reduce ",withReduce);


const posts: Array<{id: number, title: string, category: string, likes: number}> = [
    {
        id: 1,
        title: "Clean TS",
        category: "Typescript",
        likes: 300
    },
    {
        id: 2,
        title: "Stateless React",
        category: "React",
        likes: 12
    },
    {
        id: 3,
        title: "Functional Core",
        category: "Typescript",
        likes: 65
    }
]

const worstPost = posts.reduce((worstPost, post) => {
    return worstPost.likes < post.likes ? worstPost : post
})

console.log(worstPost.title, "likes is: ", worstPost.likes);

const bestPost = posts.reduce((bestPost, post) => {
    return bestPost.likes > post.likes ? bestPost : post
} )

console.log(bestPost.title, "likes is: ", bestPost.likes);


const uniqueCat = posts.map(post => post.category).reduce((cat, c)=> cat.includes(c) ? cat : [...cat, c], new Array<string>())

console.log(uniqueCat);
