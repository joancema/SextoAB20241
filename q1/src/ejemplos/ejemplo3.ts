export interface IStudent{
    name: string;
    age: number;
    grades: IGrade[];
    address: IAddress[];
}
export interface IGrade{
    subject: string;
    grade: number;

}
export interface IAddress{
    street: string;
    type: string;

}

export const students:IStudent[] =
[
    {
        name: 'Juan',
        age: 20,
        grades: [
            { subject: 'Math', grade: 10 },
            { subject: 'English', grade: 9 }
        ],
        address: [{
            street: 'Calle 1',
            type: "Casa"
        }]
    },
    {
        name: 'Ana',
        age: 22,
        grades: [
            { subject: 'Math', grade: 8 },
            { subject: 'English', grade: 7 }
        ],
        address: [{
            street: 'Calle 2',
            type: 'Casa'
        }]
    }
]