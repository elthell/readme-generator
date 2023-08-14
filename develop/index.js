// TODO: Include packages needed for this application
// inquirer, fs, utils js files
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// title, description, installation, usage, credits, liscense
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please list installation instructions. If there are none, please enter 'N/A'.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Please list usage instructions. Add deployment links and screenshots/videos as necessary.",
  },
  {
    type: "input",
    name: "credits",
    message:
      "Please credit all collaborators, third-party assets, and tutorials as needed. If there are none, please enter 'N/A'.",
  },
  {
    //checkbox for license choice
    type: "checkbox",
    name: "license",
    message: "Please choose a license.",
    choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      return console.log("Error : " + error);
    }
  });
}

// const userReadMe = util.promisify(writeToFile);
// TODO: Create a function to initialize app
async function init() {
  try {
    // prompt questions + get answers
    const userInput = await inquirer.prompt(questions);
    console.log(userInput);

    // format answers in markdown
    const userMarkdown = generateMarkdown(userInput);
    console.log(userMarkdown);

    // make readme from markdown
    // await userReadMe("READMESample.md", userMarkdown);
    writeToFile("READMESample.md", userMarkdown);

  } catch (error) {
    console.log("Error : " + error);
  }
}

// Function call to initialize app
init();
