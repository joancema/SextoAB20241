


function RealizarOperacion2Numeros(
    number1:number,
    number2:number,
    funcionCalculo: (num1:number, num2:number) => number
    , callback: (result:number) => void)
{
    const result = funcionCalculo(number1, number2);
    callback(result);

}


export {RealizarOperacion2Numeros}