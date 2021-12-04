/**
 * ES Modules example
 */
export default class Person {

    constructor(name) {
        this.name = name
        this._counter = 1
    }

    describe() {
        this._counter += 1
        return 'Person named '+this.name
    }

    get getName() {
        this._counter += 1
        return this.name
    }

    get getCounter() {
        this._counter += 1
        return this._counter
    }
}
