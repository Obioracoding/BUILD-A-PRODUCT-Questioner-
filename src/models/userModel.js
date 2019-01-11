//Reference: Code base for controllers and models received from tutorials from Olawale Aladeusi on codementor
import moment from 'moment';
import uuid from 'uuid';

class User {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.users = [];
  }
  /**
   * 
   * @returns {object} user object
   */
  createUser(data) {
    const newUser = {
      "id" : uuid.v4(),
      "firstName" :​ ​data.firstName || '',
      "lastName" : data.lastName || '',
      "otherName" : data.otherName || '',
      "email" : data.email || '',
      "phoneNumber" : data.phoneNumber || '',
      "userName" : data.userName || '',
      "registeredOn" : new Date()
    };
    this.users.push(newUser);
    return newUser
  }
  /**
   * 
   * @param {uuid} id
   * @returns {object} user object
   */
  findOneUser(id) {
    return this.users.find(user => user.id === id);
  }
  /**
   * @returns {object} returns all users
   */
  findAllUsers() {
    return this.users;
  }
  /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */
  updateUser(id, data) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users[index].firstName = data['firstName'] || user.firstName;
    this.users[index].lastName = data['lastName'] || user.lastName;
    this.users[index].otherName = data['otherName'] || user.otherName;
    this.users[index].phoneNumber = data['phoneNumber'] || meetup.phoneNumber;
    this.users[index].userName = data['userName'] || user.userName;
    this.users[index].registeredOn = data['registeredOn'] || user.registeredOn;
    return this.users[index];
  }
  /**
   * 
   * @param {uuid} id 
   */
  deleteUser(id) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
    return {};
  }
}
export default new User();