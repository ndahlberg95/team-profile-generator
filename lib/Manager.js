const Employee = require('./Employee');

class Manager extends Employee {
    constructor (incomingName, incomingID, incomingEmail, incomingOfficeNumber) {
        super (incomingName, incomingID, incomingEmail)
        this.officeNumber = incomingOfficeNumber
    }
    getRole () {
        return 'Manager'
    }
}

module.exports = Manager