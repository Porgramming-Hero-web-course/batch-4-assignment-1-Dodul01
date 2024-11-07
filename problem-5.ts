type Person = {
    name: string;
    age: number;
}

const getProperty = <T, K extends keyof T>(per: T, key: K): T[K] => {
    return per[key];
}

const person: Person = { name: 'Alice', age: 30 };
// console.log(getProperty(person, 'age'));

