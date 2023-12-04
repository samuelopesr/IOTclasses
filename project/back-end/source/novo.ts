let primeiraVariavel:number = 15
console.log(primeiraVariavel)
let primeiraString:string = "isso é 'algo' :)"
console.log(primeiraString);
let dentroS:string = `isso é ${primeiraVariavel} um número`
console.log(dentroS);
primeiraVariavel = 100
console.log(primeiraVariavel);
const vv:number = 5
console.log(vv);

function soma(a:number,b:number){
    return a + b;
}
console.log("Sominha",soma(10,10));

function callback(a1:number,b1:number, socorro: (a2:number,b2:number)=>number){
    let res = socorro(a1,b1);
    console.log(res);
    
}
callback(32,32,(a:number,b:number)=>{
    return a*b;
})
callback(primeiraVariavel, vv,(a:number,b:number)=>{
    return a%b;
})


function resto(a: number, b:number)
{
    return a%b
}

callback(10,10,resto)


