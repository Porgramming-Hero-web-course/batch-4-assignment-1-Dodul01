const removeDuplicates = (numArray: number[]): number[] => {
    const myArray: number[] = [];

    for (let i: number = 0; i < numArray.length; i++) {
        const currentNumber: number = numArray[i];

        if (!myArray.includes(currentNumber)) {
            myArray.push(currentNumber);
        }
    }
    return myArray;
}

const duplicateNumArray = [1, 1, 2, 3, 3, 4, 5, 5, 6, 6];

removeDuplicates(duplicateNumArray);

// console.log(removeDuplicates(duplicateNumArray));