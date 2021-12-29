import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Engin", "Demiroğ", "İzmir")
let user2 = new User(2, "Baran", "Gökçekli", "Muğla olsun")

userService.add(user1)
userService.add(user2)

console.log("\nMüşteri Listesi:\n")
console.log(userService.listCustomers())
console.log("\n2 nolu kullanıcı:\n")
console.log(userService.getCustomerById(2))

let customer = {id:1, firstName:"Barış"}
//Prototyping
customer.lastName = "Ertuğrul"

console.log(customer.lastName)

console.log("--------------------------------")
userService.load()
let customerToAdd = new Customer(7,"Seda","Yılmaz","Ankara","llıoh25")
customerToAdd.type = "customer"
userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())
