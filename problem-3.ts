const countWordOccurrences = (sentence: string, word: string): number => {
    const wordArray: string[] = sentence.split(/[\s,.-]+/);
    const matchWord: string[] = [];

    for (let i: number = 0; i < wordArray.length; i++) {
        const currentWord: string = wordArray[i].toLowerCase();

        if (currentWord === word.toLocaleLowerCase()) {
            matchWord.push(currentWord);
        }
    }


    return matchWord.length;
}

// console.log(countWordOccurrences("I love typescript", "typescript"));
// console.log(countWordOccurrences("Bangladesh is a great county.", "bangladesh")); 

