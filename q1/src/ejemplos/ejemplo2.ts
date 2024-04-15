// const operar3 = (num1:number, num2:number, operacion:string):number => {
//     switch(operacion){
//         case 'suma':
//             return num1 + num2;
//         case 'resta':
//             return num1 - num2;
//         case 'multiplicacion':
//             return num1 * num2;
//         case 'division':
//             return num1 / num2;
//         default:
//             return -1;
//     }

// }


// const operar2= function (num1:number, num2:number, operacion:string):number {
//     switch(operacion){
//         case 'suma':
//             return num1 + num2;
//         case 'resta':
//             return num1 - num2;
//         case 'multiplicacion':
//             return num1 * num2;
//         case 'division':
//             return num1 / num2;
//         default:
//             return -1;
//     }
// }

interface IParams {
    num1:number,
    num2:number,
    operacion:string,
    algoOpcional?:string
}

function operar(params:IParams):number{
    const { operacion,num1,num2 } = params;
    switch(operacion){
        case 'suma':
            return num1 + num2;
        case 'resta':
            return num1 - num2;
        case 'multiplicacion':
            return num1 * num2;
        case 'division':
            return num1 / num2;
        default:
            return -1;
    }
}

export {operar}