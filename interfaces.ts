// learning about Interfaces

interface Person {
  firstName: string;
  lastName: string;
}
function greeter(person: Person) {
  return 'hello ' + person.firstName + ' ' + person.lastName;
}

let user = { firstName: 'Godwin', lastName: 'Gitonga' };
document.body.textContent = greeter(user);

// With type annotations mismatched arguments are captured
// before code is compiled to js
// Interfaces allow typescript to annotate objects.
