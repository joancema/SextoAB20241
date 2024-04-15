//definiciOn de variables
// import { message, alumno  } from './examples/example1'
// console.log(message)
// funciones import export
// import { operation } from './examples/example2'
// console.log(operation( {num1: 10, num2: 5, op: '+'}))
// clases import export
// import { Student } from './examples/example4'
// const student = new Student('John', '123 Main Street');
// callbacks 
// import { RealizarOperacion2Numeros } from './examples/example5'
// RealizarOperacion2Numeros(10, 5, (num1, num2) => num1 + num2, (result) => console.log(result));
// callbacks
// promises
// async await
import { getPosts } from './examples/example6'
// getPosts().then(posts => console.log(posts));


(async ()=>{
    const data = await getPosts();
    console.log(data);
})()
    