const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'tlName',
            message: 'What is your team leaders name? (Required)',
            validate: tlNameInput => {
                if (tlNameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tlId',
            message: 'Enter your team leaders employee identification number (Required)',
            validate: tlIdInput => {
                if (tlIdInput) {
                    return true;
                } else {
                    console.log('You need to enter an employee ID number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tlEmail',
            message: 'Enter your team leaders email address (Required)',
            validate: tlEmailInput => {
                if (tlEmailInput) {
                    return true;
                } else {
                    console.log('You need to enter an email address!');
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

    // if (!profileData.profiles) {
    //     profileData.profiles = [];
    // }
    return inquirer
        .prompt([
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
        ])
//         .then(engineerData => {
//             profileData.profiles.push(engineerData);
//             if (engineerData.confirmAddProject) {
//                 return promptEngineer(profileData);
//             } else {
//                 return profileData;
//             }
//         });
};

//PROMTP: Would you like to...
    //Add an intern
    //Finish

const promptIntern = profileData => {
    console.log(`
  =================
  Add an Intern
  =================
  `);

    if (!profileData.profiles) {
        profileData.profiles = [];
    }
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
        ])
        .then(internData => {
            profileData.profiles.push(internData);
            if (internData.confirmAddIntern) {
                return promptIntern(profileData);
            } else {
                return profileData;
            }
        });
};

const employees = []

const Employee = require('./lib/Employee');
var empy = new Employee ('Nick', '12', 'email@email.com')
console.log (empy.getRole())

const Manager = require('./lib/Manager');
const { connectableObservableDescriptor } = require('rxjs/internal/observable/ConnectableObservable');
var ng = new Manager ('Nora', '13', 'email2@email,com', '103')
console.log (ng.getRole())

promptUser()
    // .then(promptProfile)
    .then(async profileData => { 
        console.log (profileData);
        const edgy = new Manager (profileData.tlName, profileData.tlid, profileData.tlemail, '123')
        if (profileData.nextOption === 'Add an Engineer'){
            let engineerResponses = await promptEngineer()
            console.log (engineerResponses)
        }
        
        // const pageHTML = generatePage(profileData);

        // fs.writeFile('./index.html', pageHTML, err => {
        //   if (err) throw new Error(err);

        //   console.log('Page created! Check out index.html in this directory to see it!');
        // });
    });

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('profile complete! Check out index.html to see the output!');
// });