class Person {
    fullName: String;
    constructor(public firstName: String, public middleInitial: String, public lastName: String) {
        this.fullName = firstName + '' + middleInitial + '' + lastName;
    }
}

interface PersonObj {
    firstName: String;
    middleInitial: String;
    lastName: String;
}

function helloTS(user: PersonObj) {
    return 'Hello, ' + user.firstName + user.middleInitial + user.lastName;
}
let user = new Person('Kou', ' ', 'JianFeng');

document.body.innerHTML = helloTS(user);

