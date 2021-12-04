/**
 * ES Modules example
 */
import Person from './b.js'

export default class Employee extends Person {

    constructor(name, company) {
        super(name)
        this.company = company
    }

    describe() {
        return super.describe() + ' works at ' + this.company
    }
}
