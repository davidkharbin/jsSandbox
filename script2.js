function User(email, name){
  this.email = email;
  this.name = name;
  this.online = false;
  this.login = function(){
    console.log(`${this.email}, has logged in`);
  }
}





let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

console.log(userOne);
userTwo.login();