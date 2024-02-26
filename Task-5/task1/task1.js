function User(name,gender,birthday) {
    this.name = name
    this.gender = gender
    this.birthday = birthday
}

let oruc = new User('Oruc' , 'K' , '2007')

console.log(oruc.birthday);