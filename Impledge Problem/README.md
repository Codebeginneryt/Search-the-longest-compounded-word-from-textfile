// Steps for summrised this programe.

Step 1: Firstly here i can import the file system and use file system for read the the text file content.
Step 2: Give the path of file which file is read.
Step 3: Declare the fuction for find the longest capmoud word in the file.
Step 4: Read the file using File System already given function method are readFileSync().
Step 5: Set and break the word as starts with new line and match the word.
Step 6: Find the word from the different words using filter method those word who are not continously starts with same word and not repeat the same word in the word.
Step 7: Short the word with there length those word lenght are long then they consider 1st word and the nest long word is the second longest word.
Step 8: Print the two longest compound words are in the text file.


const fs = require('fs');

// Your README content in markdown format
const readmeContent = `
# Project Name

Brief description of your project.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

Explain how to install your project. For example:

\`\`\`
npm install
\`\`\`

## Usage

Explain how to use your project. Provide code examples, if applicable.

\`\`\`javascript
// Example code snippet
const myFunction = () => {
  // Your code here
};
\`\`\`

## Features

List the main features of your project.

- Feature 1
- Feature 2
- ...

## Contributing

Explain how others can contribute to your project or provide guidelines for contributing.

## License

This project is licensed under the [License Name] - see the [LICENSE](LICENSE) file for details.
`;

// Write the README content to a file named README.md
fs.writeFileSync('README.md', readmeContent);

console.log('README.md file created successfully.');
