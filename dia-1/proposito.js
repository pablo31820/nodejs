/*
   js es debilmente tipado
*/

let a=1;  //inferencia de tipos
console.log(typeof(a)) //number

a="Hola"
console.log(typeof(a)) //string

/*
 js es dinámico
*/

const foo = {id:1}
foo.name = 'pedro'

console.log(foo);
//{id:1,name:'pedro'}

/*
   js es un lenguaje de proposito general
   1. Programación orientada a objectos

   const sum = (a,b)=>a+b
   sum(5,3) //8 //Function->Object

   2. Programación funcional
    [1,2,3,4,5,6].filter(v=>v%2===0) [2,4,6]
    
   3. Ejecución y programacion de script
 */