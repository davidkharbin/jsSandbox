function User(email, name){
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function(){
  this.online = true;
  console.log(`${this.email}, has logged in.`);
}

User.prototype.logout = function(){
  this.online = false;
  console.log(`${this.email}, has logged out.`);
}

function Admin(...args){
  User.apply(this, args)
  this.role = 'super admin';
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
let admin = new Admin('sean@ninjas.com', 'sean');

console.log(admin);