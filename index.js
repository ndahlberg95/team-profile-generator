const inquirer = require('inquirer');
const fs = require('fs');
// const generatePage = require('./src/page-template');
const openHTML = require('./src/openHTML');
const closeHTML = require('./src/closeHTML');
var dynamicHTML = "";
const generateManager = require('./src/manager-template');
const generateEngineer = require('./src/engineer-template');
const generateIntern = require('./src/intern-template');

const promptUser = () => {
    console.log(`
=================
Add a Manager
=================
`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your managers name? (Required)',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter your managers employee identification number (Required)',
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log('You need to enter an employee ID number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter your managers email address (Required)',
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log('You need to enter an email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Enter your managers office number (Required)',
            validate: managerOfficeNumber => {
                if (managerOfficeNumber) {
                    return true;
                } else {
                    console.log('You need to enter an office number!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'nextOption',
            message: 'Would you like to...',
            choices: [
                "Add an Engineer",
                "Add an Intern",
                "Finish"
            ],
        }
    ])
};

const promptEngineer = userInput => {
    console.log(`
=================
Add an Engineer
=================
`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of your engineer? (Required)',
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log('You need to enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Enter their employee identification number (Required)',
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log('You need to enter an employee ID number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Enter your engineers email address (Required)',
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log('You need to enter an email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your engineers GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('You need to enter a GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'nextOption',
            message: 'Would you like to...',
            choices: [
                "Add an Engineer",
                "Add an Intern",
                "Finish"
            ],
        }
    ])
};

const promptIntern = userInput => {
    console.log(`
  =================
  Add an Intern
  =================
  `);
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is your interns name? (Required)',
                validate: internNameInput => {
                    if (internNameInput) {
                        return true;
                    } else {
                        console.log('You need to enter a name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internId',
                message: 'Enter their employee identification number (Required)',
                validate: internIdInput => {
                    if (internIdInput) {
                        return true;
                    } else {
                        console.log('You need to enter an employee ID number!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Enter your interns email address (Required)',
                validate: internEmailInput => {
                    if (internEmailInput) {
                        return true;
                    } else {
                        console.log('You need to enter an email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter your interns school (Required)',
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('You need to enter a school!');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'nextOption',
                message: 'Would you like to...',
                choices: [
                    "Add an Engineer",
                    "Add an Intern",
                    "Finish"
                ],
            }
        ])
};


//add openHTML to dynamicHTML
//prompt user for manager input
//add manager to dynamicHTML
//prompt user for additional employees
//add additional employees to dynamicHTML as necessary
//add closeHTML to dynamicHTML
//writeFile with dynamicHTML

function concatString(Str1, Str2)
{
    return '' + Str1 + Str2;
}

dynamicHTML = concatString(openHTML, dynamicHTML)

promptUser()
    .then(async userInput => {
        console.log(userInput);
        dynamicHTML = concatString(dynamicHTML, generateManager(userInput));
        if (userInput.nextOption === 'Add an Engineer') {
            let engineerResponses = await promptEngineer();
            dynamicHTML = concatString(dynamicHTML, generateEngineer(engineerResponses));
        }
        if (userInput.nextOption === 'Add an Intern') {
            let internResponses = await promptIntern();
            dynamicHTML = concatString(dynamicHTML, generateIntern(internResponses));
        }
        if (userInput.nextOption === 'Finish') {
            dynamicHTML = concatString(dynamicHTML, closeHTML);

            fs.writeFile('./dist/index.html', dynamicHTML, err => {
              if (err) throw new Error(err);

              console.log('Page created! Check out index.html in this directory to see it!');
            });
        }
    });