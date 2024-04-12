interface IAddress {
    street: string;
    city: string;
    zip: string;
    type?: string;
}
interface IGrade {
    subject: string;
    grade: number;
}
interface IStudent {
    name: string;
    age: number;
    addresses: IAddress[];
    grades: IGrade[];
}   


const students: IStudent[] = [
    {
        name: 'John Doe',
        age: 25,
        addresses: [
            {
                street: '123 Main St',
                city: 'Springfield',
                zip: '12345',
            },
            {
                street: '456 Elm St',
                city: 'Springfield',
                zip: '12345'
            }
        ],
        grades: [
            {
                subject: 'Math',
                grade: 90
            },
            {
                subject: 'English',
                grade: 88
            }
        ]
    },
    {
        name: 'Jane Doe',
        age: 24,
        addresses: [
            {
                street: '789 Pine St',
                city: 'Springfield',
                zip: '12345'
            }
        ],
        grades: [
            {
                subject: 'Math',
                grade: 85
            },
            {
                subject: 'English',
                grade: 92
            }
        ]
    }
];
