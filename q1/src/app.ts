// import {nombre, edad } from './ejemplos/ejemplo1'
// console.log(nombre, edad)
// import { operar } from './ejemplos/ejemplo2'
// operar({num1:1, num2:2, operacion: 'suma'});
// import { students } from './ejemplos/ejemplo3'
// students.forEach((ele)=>{
//     console.log(ele)
// })
// import { Student  } from './ejemplos/ejemplo4'
// const student = new Student('Juan', 20)
// console.log(student)

import { operar } from './ejemplos/ejemplo5'
operar(12, 6, (num1, num2) => num1 * num2, (result) => console.log(result))

