const sumar2NumerosConCallback = (a: number, b: number, callback: (result: number) => void) => {
    const result = a + b;
    callback(result);
}
export { sumar2NumerosConCallback}