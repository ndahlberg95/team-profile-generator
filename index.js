const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

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
                "Add an Inter",
                "Finish"
            ],
            //if they choose "Add an Engineer" send them to promptEngineer
            //if they choose "Add an Intern" send them to promptIntern
            //if they choose "Finish" send them to generatePage
        }
    ])
};

const promptEngineer = profileData => {
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
                "Add an Inter",
                "Finish"
            ],
            //if they choose "Add an Engineer" send them to promptEngineer
            //if they choose "Add an Intern" send them to promptIntern
            //if they choose "Finish" send them to generatePage
        }
    ])
};

const promptIntern = profileData => {
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
                    "Add an Inter",
                    "Finish"
                ],
                //if they choose "Add an Engineer" send them to promptEngineer
                //if they choose "Add an Intern" send them to promptIntern
                //if they choose "Finish" send them to generatePage
            }
        ])
};

const employees = []

const Employee = require('./lib/Employee');
var empy = new Employee('Nick', '12', 'email@email.com');
console.log(empy.getRole());

const Manager = require('./lib/Manager');
var ng = new Manager($[managerNameInput], $[managerIdInput], $[managerEmailInput], $[officeNumberInput]);
console.log(ng.getRole());

const Engineer = require('./lib/Engineer');
var ng = new Engineer($[engineerNameInput], $[engineerIdInput], $[engineerEmailInput], $[githubInput]);
console.log(ng.getRole());

const Intern = require('./lib/Intern');
var ng = new Intern($[internNameInput], $[internIdInput], $[internEmailInput], $[schoolInput]);
console.log(ng.getRole());

promptUser()
    .then(async profileData => {
        console.log(profileData);
        const edgy = new Manager(profileData.managerName, profileData.managerId, profileData.managerEmail, profileData.managerOfficeNumber)
        if (profileData.nextOption === 'Add an Engineer') {
            let engineerResponses = await promptEngineer()
            console.log(engineerResponses)
        }
        if (profileData.nextOption === 'Add an Intern') {
            let internResponses = await promptIntern()
            console.log(internResponses)
        }
        // if (profileData.nextOption === 'Finish') {
        //     // const pageHTML = generatePage(profileData);

        //     // fs.writeFile('./index.html', pageHTML, err => {
        //     //   if (err) throw new Error(err);

        //     //   console.log('Page created! Check out index.html in this directory to see it!');
        //     // });
        // }
    });