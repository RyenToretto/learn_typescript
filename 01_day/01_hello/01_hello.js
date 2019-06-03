var Person = /** @class */ (function () {
    function Person(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + '' + middleInitial + '' + lastName;
    }
    return Person;
}());
function helloTS(user) {
    return 'Hello, ' + user.firstName + user.middleInitial + user.lastName;
}
var user = new Person('Kou', ' ', 'JianFeng');
document.body.innerHTML = helloTS(user);
//# sourceMappingURL=01_hello.js.map