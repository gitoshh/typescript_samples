class student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleName: string,
    public lastName: string
  ) {
    this.fullName = firstName + ' ' + middleName + ' ' + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}
function greeter(person: Person) {
  return 'hello ' + person.firstName + ' ' + person.lastName;
}

let user = new student('Godwin', 'Gitonga', 'Karani');
document.body.textContent = greeter(user);
