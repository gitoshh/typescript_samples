// learning about Type annotations
function greeter(name: string) {
  return 'hello' + name;
}

let user = 'Godwin';
document.body.textContent = greeter(user);

// With type annotations mismatched arguments are captured
// before code is compiled to js
