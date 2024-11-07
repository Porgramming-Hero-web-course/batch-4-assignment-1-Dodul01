const sumArray = (num: number[]): number => {
    const sum = num.reduce((x, y) => x + y, 0);
    return sum;
}

const array: number[] = [10, 50];

sumArray(array);

// console.log(sumArray(array));