/**
 * ES Modules example
 */
// Public member
const name="Mumin"

// Private membed, not exported
let counter=0

// Public method
function sayHi(who) {
    who = who ?? "Nobody"
    return `Hi to you '${who}'. I thought you were 'Mega-${name}'. ${bankAccount()} I'm counting your visits '${++counter}'`
}

// Private member, not exported
function bankAccount() {
    return `Your bankaccount is a well hidden secret: 111 222 333.`
}

// Export what should be visible
export default {
    name,
    sayHi
};
