 class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    returnName() {

        return this.name;
    }
    returnId() {

        return this.id;
    }
    returnEmail() {

        return this.email;
  }
}

module.exports = Employee;
