interface IParams{
    num1: number;
    num2: number;
    op: string;
}
function operation(params:IParams): number {
    const {num1, num2, op} = params;
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 0;
    }

}
export {operation}