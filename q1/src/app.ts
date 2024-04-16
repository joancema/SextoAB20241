// import {nombre, edad } from './ejemplos/ejemplo1'
// console.log(nombre, edad)
// import { operar } from './ejemplos/ejemplo2'
// operar({num1:1, num2:2, operacion: 'suma'});
// import { students, IStudent } from './ejemplos/ejemplo3';
// students.forEach((ele)=>{
//     console.log(ele)
// })
// import { Student  } from './ejemplos/ejemplo4'
// const student = new Student('Juan', 20)
// console.log(student)
// import { operar } from './ejemplos/ejemplo5'
// operar(12, 6, (num1, num2) => num1 * num2, (result) => console.log(result))
// import { students } from './ejemplos/ejemplo3'
// interface IStudent{
//     id: number;
//     name: string;
//     age: number;

// }
// const students:IStudent[]=[
//     {id: 1, name: 'Juan', age: 20},
//     {id: 2, name: 'Pedro', age: 21},
//     {id: 3, name: 'Maria', age: 22},
//     {id: 4, name: 'Ana', age: 23},
// ]

// function getStudentById(id: number, callback: (err:Error|undefined , student: IStudent|undefined) => void){
//     const student= students.find((student) => student.id === id)
//     if (!student){
//         return callback(new Error(`No se encontro el estudiante con id ${id}`), undefined)
//     }
//     callback(undefined, student)
// }


// getStudentById( 1, ( err, res )=>{
//     if (err)
//         console.log(err)
//     console.log(res)

// } )

// getStudentById(1).then((res)=>{ console.log(res) })
// const x=  await getStudentById(5)


import { IPost, httpClient } from './ejemplos/ejemplo7'
// using promises
// httpClient<IPost[]>('https://jsonplaceholder.typicode.com/posts')
// .then((res)=>{ console.log(res) })
// .catch((err)=>{ console.log(err) })

(async ()=>{
    try {
        const data= await httpClient<IPost[]>('https://jsonplaceholder.typicode.com/posts')
        console.log(data)    
    } catch (error) {
        console.log(error)
    }
})()












