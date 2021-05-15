const Employee = require('./Employee');

class Intern extends Employee {
    constructor (incomingName, incomingID, incomingEmail, incomingSchool) {
        super (incomingName, incomingID, incomingEmail)
        this.school = incomingSchool
    }
    getRole () {
        return 'Intern'
    }
}

module.exports = Intern