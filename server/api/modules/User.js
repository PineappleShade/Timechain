
class User{
  constructor(id, username, firstName, lastName) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getId(){
    return this.id;
  }

  getUsername(){
    return this.username;
  }

  getFirstName(){
    return this.firstName
  }

  getLastName(){
    return this.lastName;
  }

}

module.exports.User = User;