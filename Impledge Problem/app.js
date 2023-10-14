// Step 1: Firstly here i can import the file system and use file system for read the the text file content.
const fs = require('fs');

// Step 2: Give the path of file which file is read.
const textFile = 'Input_02.txt';

// Step 3: Declare the fuction for find the longest capmoud word in the file. 
const longestCompoundWords = findLongestCompoundWords(textFile);

function findLongestCompoundWords(textFile){

    // Step 4: Read the file using File System already given function method are readFileSync().
    const text = fs.readFileSync(textFile, 'utf8');

    // Step 5: Set and break the word as starts with new line and match the word. 
    const words = text.match(/\b\w+\b/g);


    // Step 6: Find the word from the different words using filter method those word who are not continously starts with same word and not repeat the same word in the word.
    const compoundWords = words.filter(word => {
        return words.some(w => word !== w && word.startsWith(w));
      });



      // Step 7: Short the word with there length those word lenght are long then they consider 1st word and the nest long word is the second longest word.
      const sortedCompoundWords = compoundWords.sort((a, b) => b.length - a.length);

  return sortedCompoundWords.slice(0, 2);
}

// Step 8: Print the two longest compound words are in the text file. 
console.log('Longest Compound Words:');
console.log(longestCompoundWords);