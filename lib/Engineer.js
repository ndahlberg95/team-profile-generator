const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (incomingName, incomingID, incomingEmail, incomingGithub) {
        super (incomingName, incomingID, incomingEmail)
        this.gitHub = incomingGitub
    }
}

module.exports = Engineer