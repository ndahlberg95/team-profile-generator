const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (incomingName, incomingID, incomingEmail, incomingGithub) {
        super (incomingName, incomingID, incomingEmail)
        this.gitHub = incomingGithub
    }
    getRole () {
        return 'Engineer'
    }
}

module.exports = Engineer