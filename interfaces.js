// learning about Interfaces
function greeter(person) {
    return 'hello ' + person.firstName + ' ' + person.lastName;
}
var user = { firstName: 'Godwin', lastName: 'Gitonga' };
document.body.textContent = greeter(user);
// With type annotations mismatched arguments are captured
// before code is compiled to js
