

function operar(num1:number, num2:number
    , operar:(num1:number,num2:number)=>number  , callback:(result:number)=>void  ){
    const result = operar(num1,num2);
    callback(result)

}

export {operar}