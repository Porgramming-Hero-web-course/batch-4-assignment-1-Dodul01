const countWordOccurrences = (sentence: string, word: string): number => {
    const wordArray: string[] = sentence.split(' ');
    const matchWord: string[] = [];

    for (let i: number = 0; i < wordArray.length; i++) {
        const currentWord: string = wordArray[i].toLowerCase();

        if (currentWord.includes(word.toLowerCase())) {
            matchWord.push(currentWord);
        }
    }


    return matchWord.length;
}

// console.log(countWordOccurrences("As a developer, I am constantly developing my skills in development.", "develop")); //3