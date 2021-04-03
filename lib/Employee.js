class Employee {
    constructor (incomingName, incomingID, incomingEmail) {
        this.name = incomingName
        this.id = incomingID
        this.email = incomingEmail
    }
    getRole () {
        return 'Employee'
    }
}

 module.exports = Employee