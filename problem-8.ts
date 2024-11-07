const validateKeys = <T extends object>(per: T, keys: (keyof T)[]): boolean => {
    return keys.every((key) => key in per);
}

const personNew = { name: "Alice", age: 25, email: "alice@example.com" };


console.log(validateKeys(personNew, ["name", "age"]));