var student = /** @class */ (function () {
    function student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleName + ' ' + lastName;
    }
    return student;
}());
function greeter(person) {
    return 'hello ' + person.firstName + ' ' + person.lastName;
}
var user = new student('Godwin', 'Gitonga', 'Karani');
document.body.textContent = greeter(user);
